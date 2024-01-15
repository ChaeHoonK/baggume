import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";
import supabase from "@/services/supabase/client";
import { SupabaseAdapter } from '@auth/supabase-adapter'
import type { Adapter } from 'next-auth/adapters';
import jwt from "jsonwebtoken"

const handler = NextAuth({
  providers: [
    // NaverProvider({
    //     clientId: process.env.NAVER_CLIENT_ID||'',
    //     clientSecret: process.env.NAVER_CLIENT_SECRET||'',
    // }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "",
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL ??'',
    secret: process.env.SUPABASE_KEY_SECRET ?? '',
  }) as Adapter,
  callbacks: {
    async jwt({ token, user, account }) {
      

      return token;
    },
    async session({ session, token, user }: any) {
        const signingSecret = process.env.SUPABASE_JWT_SECRET
        if (signingSecret) {
          const payload = {
            aud: "authenticated",
            exp: Math.floor(new Date(session.expires).getTime() / 1000),
            sub: user.id,
            email: user.email,
            role: "authenticated",
          }
          session.supabaseAccessToken = jwt.sign(payload, signingSecret)
        }
        return session
    },
  },
});

export { handler as GET, handler as POST };

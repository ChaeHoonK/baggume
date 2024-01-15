'use client'

import styles from "../page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import KakaoButton from "@/components/Buttons/KakaoButton";
import {GET as context} from '../api/auth/[...nextauth]/route'
import { useEffect } from "react";



export default function SignUp() {
  const { data: session } = useSession();

  useEffect(()=> {
    if (session) {
        console.log(session)
        window.location.replace('/')
    }
  })
    

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl text-center bold underline">바꿈에 오신것을 환영합니다.</h2>
        <h3 className="text-xl text-center">간편하게 등록하고 생활비를 절약해보세요!</h3>
        <KakaoButton></KakaoButton>
    </div>
  );
}

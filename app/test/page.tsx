'use client'

import styles from "../page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import TopNavigation from "@/components/Navbar/TopNavigation";
import TestComponent from "@/components/tmp/TestComponent";
import { useState } from "react";
import CouponCard from "@/components/CouponCard/CouponCard";
import KakaoButton from "@/components/Buttons/KakaoButton";
import Navbar from '@/components/Navbar/Navbar'

export default function Test() {
  const { data: session } = useSession();
    const [nav, setNav] = useState<'main'|'sub'>('main')


  return (
    <main className={styles.main}>
        <Navbar/>

    <KakaoButton></KakaoButton>

      <div className={styles.description}>
        <button onClick={()=> setNav(nav=='main'? 'sub' : 'main')}>button</button>
        <button onClick={() => signIn()}>Sign In</button>
        <button onClick={() => signOut()}>Sign Out</button>
        <button onClick={()=> {
          console.log(session)
        }}>세션 데이터</button>

      </div>
        <div className="columns-3" id="test">
                <CouponCard/>
                <CouponCard/>
                <CouponCard/>
                <CouponCard/>
                <CouponCard/>
        </div>

        <TestComponent></TestComponent>
    </main>
  );
}

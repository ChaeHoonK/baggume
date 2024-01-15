//app/page.tsx

'use client'

import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import {useEffect, useState, useMemo} from 'react'
import Navbar from '@/components/Navbar/Navbar'
import { User, UserClient } from "@/models/User/User";
import jwt from 'jsonwebtoken'
import supabase from '../src/services/supabase/client'
import {useRecoilState} from "recoil";
import { userState } from "@/recoil/state";


export default function Home() {

  const [user, setUser] = useRecoilState(userState)
  const [needMoreInfo, setNeedMoreInfo] = useState(false)


  function handleClick() {
    signOut()
  }

  const {data:session, status}:any = useSession()
  

  useEffect(()=> {
    if (status == 'loading')
      return
    if (window && !session){
      window.location.replace('/signup')
    }

    const decoded:any = jwt.decode(session?.supabaseAccessToken)


    if (decoded?.sub) {
      UserClient.selectUser(decoded.sub).then((result)=> {
        console.log('result is ', result)
        setUser(result)
      })
    }

    
  },[status])
  

  
  
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.description}>
        <button onClick = {handleClick}>로그아웃</button>
        <button onClick = {async ()=> {
          console.log(session)
          // const decoded = jwt.decode(session?.supabaseAccessToken)
          // console.log(decoded?.sub)
          console.log(user)
          //const {data, error } = await supabase.from('users').select()
          //console.log("data is ",data)
        }}>Session</button>
      </div>
    </main>
  );
}

'use client'

import { signIn  } from "next-auth/react";

export default function KakaoButton() {

    function handleClick() {
        signIn()
    }

    return (
        <button className="w-40 lg:w-60 shadow-lg" onClick={handleClick}>
            <img src="/kakao_login.png" alt="" />
        </button>
    )
}
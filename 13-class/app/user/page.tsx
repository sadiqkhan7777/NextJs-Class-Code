"use client"

import LoginForm from "@/components/LoginForm"
import SignupForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function User (){
    const [isLogin, setIsLogin] = useState(true)

    return(
        <div className="min-h-screen flex flex-col justify-center item-center bg-black text-white">
            <diV className="mb-4">
                <button className=""
                onClick={(isLogin) => setIsLogin(!isLogin)}
               varient={ghost}
               >{isLogin ? 'Need a account: Create ' : 'Login with your account'}</button>
            </diV>
                {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
    )
}
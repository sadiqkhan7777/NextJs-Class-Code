"use client"

import { useState } from "react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";



const SignupForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault ()
        console.log('signup', {email, confirmPassword})

    }
    return (
        <Card className="w-[w-350px]">
            <CardHeader>
                <CardTitle>Signup page</CardTitle>
                <CardDescription>Enterthe asked detail to creat a new account</CardDescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit} className='space-y-4'>
                <div className="space-y-2">
                    <Input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                <Input 
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                    />
                </div>
                <div>
                <Input 
                    type="password"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e)=> setConfirmPassword(e.target.value)}
                    required
                    />
                </div>
                <button type="submit" className="w-full" onClick={() => alert('Thanks for SignUp')}>
                    Signup
                </button>
               </form>
            </CardContent>
        </Card>
    )
}

export default SignupForm
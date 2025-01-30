"use client"

import { useState } from "react";
import {Input} from "@/components/ui";



const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault ()
        console.log('login attempt', {email, password})

    }
    return (
        <Card className="w-[w-350px]">
            <CardHeader>
                <CardTitle>Login page</CardTitle>
                <Carddescription>Enter your creditionals to access your account</Carddescription>
            </CardHeader>
            <CardContent>
               <form onSubmit={handleSubmit} className='space-y-4'>
                <div className="space-y-2">
                    <Input 
                    type="email"
                    placeholder="Enter your email"
                    valuse={email}
                    onChange={(e)=> setEmail(e.target.valve)}
                    required
                    />
                </div>
                <div>
                <Input 
                    type="password"
                    placeholder="Enter your password"
                    valuse={password}
                    onChange={(e)=> setPassword(e.target.valve)}
                    required
                    />
                </div>
                <button type="submit" className="w-full" ocClick={() => alert('Thanks for login')}>
                    Login
                </button>
               </form>
            </CardContent>
        </Card>
    )
}


export default LoginForm
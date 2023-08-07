'use client'
import { utils } from "@/app/utils/page";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

const SignUpForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [hide, setHide] = useState(false)



    return (
        <div className="w-full">
            <form action="#">

                <div className="flex flex-col gap-2 mt-3 relative">
                    <label htmlFor="Username" className="text-[--primary-color] text-lg text-left">Username :</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2 text-[#666] outline-0"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 mt-3 relative">
                    <label htmlFor="Email" className="text-[--primary-color] text-lg text-left">Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 text-[#666] outline-0"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2 mt-3 relative">
                    <label htmlFor="Password" className="text-[--primary-color] text-lg text-left">Password :</label>
                    <input
                        type={(hide) ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 text-[#666] outline-0"
                        required
                    />
                    <span className="absolute text-[--primary-color] right-6 top-10 text-xl cursor-pointer" onClick={() => setHide(!hide)}>{(hide) ? <RiEyeOffLine/> : <RiEyeLine/> }</span>
                </div>

                <div>
                   <button className={`${utils.hoverableBtn} mt-6`}>Create Account</button>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;
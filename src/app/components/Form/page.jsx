'use client'
import { utils } from "@/utils/page";
import Link from "next/link";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Form = ({ login, onFormSubmit }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [hide, setHide] = useState(false);

    const onSubmithandler = (e) => {
        e.preventDefault();
        onFormSubmit(username, email, password)
    }

    return (
        <div className="flex flex-col gap-6">
            <form action="#" onSubmit={onSubmithandler} className="flex flex-col gap-4">

                {
                    (!login) ?

                        (<div className="flex flex-col gap-2 relative">
                            <label htmlFor="Username" className="text-[--primary-color] text-lg text-left">Username :</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="border p-2 text-[#666] outline-0"
                                required
                            />
                        </div>)
                        :

                        null
                }

                <div className="flex flex-col gap-2 relative">
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

                {/* <div><span className="text-light text-red-500">User Already Exist</span></div> */}

                <div className="flex flex-col gap-2  relative">
                    <label htmlFor="Password" className="text-[--primary-color] text-lg text-left">Password :</label>
                    <input
                        type={(hide) ? 'text' : 'password'}
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 text-[#666] outline-0"
                        required
                    />
                    <span className="absolute text-[--primary-color] right-3 top-12 text-xl cursor-pointer" onClick={() => setHide(!hide)}>{(hide) ? <RiEyeOffLine /> : <RiEyeLine />}</span>
                </div>

                {/* <div><span className="text-light text-red-500">Incorrect Password</span></div> */}

                <div className="text-[--primary-color]">{(login) ? <Link href={`/auth/signup`}><span>Dont have Account, SignUp!</span></Link> : <Link href={`/auth/login`}><span>Already Have Account, SignIn!</span></Link>}</div>

                <div >
                    <button className={`${utils.hoverableBtn} mt-4 w-full`}>{(!login) ? "Create Account" : "Login"}</button>
                </div>
            </form>

            <div className="w-full text-center text-sm relative">
               {`OR ${(!login) ? 'SIGN UP' : 'SIGN IN'} WITH`}
            </div>

            <div >
                <button className="w-full flex gap-3 items-center border p-3 justify-center" onClick={() => signIn("google")}>
                    <span className="text-lg font-medium text-[--primary-black]">Login with</span>
                    <FcGoogle className="text-2xl"/>
                </button>
            </div>
        </div>
    )
}

export default Form;
'use client'
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useContext } from "react";
import { QuizContext } from "@/app/QuizContext/page";

const Navbar = () => {

    const {data: session, status} = useSession();

    const context = useContext(QuizContext);
    // console.log('context', context);

    return (
        <div className="w-full">
            <nav className="w-full h-[90px] flex items-center justify-between px-[20px] sm:px-[40px] md:px-[60px] border-b">
                <div className="logo">
                    <Link href={'/'}><img src="/smit.png" alt="smit logo" className="w-[90px]"/></Link>
                </div>
                <div className="menu flex gap-8 items-center">
                    {(status === 'authenticated') ? <Link href={'/profile'} className="text-xl font-medium">Profile</Link> : null}
                    {(status === 'unauthenticated') ? <Link href={'/auth/login'} className="text-xl font-medium text-[--primary-color] border px-6 py-2">Login</Link> : null}
                    {(status === 'authenticated') ? <button onClick={() => signOut()} className="text-xl font-medium text-[--primary-color] border px-6 py-2">Logout</button> : null}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
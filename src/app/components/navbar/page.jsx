import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full">
            <nav className="w-full h-[90px] flex items-center justify-between px-[20px] sm:px-[40px] md:px-[60px] border-b">
                <div className="logo">
                    <Link href={'/'}><img src="/smit.png" alt="smit logo" className="w-[90px]"/></Link>
                </div>
                <div className="menu">
                    <Link href={'/'} className="text-xl font-medium text-[--primary-color] border px-6 py-2">Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
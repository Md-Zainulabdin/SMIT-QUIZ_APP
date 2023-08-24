"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="w-full bg-white relative z-10">
      <nav className="w-full h-[70px] md:h-[90px] flex items-center justify-between px-[20px] sm:px-[40px] md:px-[60px] border-b">
        <div className="logo">
          <Link href={"/"}>
            <img src="/smit.png" alt="smit logo" className="w-[80px] md:w-[90px]" />
          </Link>
        </div>
        <div className="menu flex gap-8 items-center">
          {/* {(status === 'authenticated') ? <Link href={'/results'} className="text-xl font-medium">Results</Link> : null} */}
          {status === "unauthenticated" ? (
            <Link
              href={"/auth/login"}
              className="text-md sm:text-xl font-medium text-[--primary-color] border px-3 py-1 sm:px-6 sm:py-2"
            >
              Login
            </Link>
          ) : null}
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="text-md sm:text-xl font-medium text-[--primary-color] border px-3 py-1 sm:px-6 sm:py-2"
            >
              Logout
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

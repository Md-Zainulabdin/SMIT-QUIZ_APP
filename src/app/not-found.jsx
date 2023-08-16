import Link from "next/link";
import Navbar from "./components/navbar/page";
import { utils } from "./utils/page";

/* eslint-disable */

const notFound = () => {
    return (
        <>
            <Navbar />
            <div className="w-full h-[90vh] customFlex">
                <div className="flex flex-col text-center items-center gap-8 w-[50%]">
                    <h1 className="text-7xl font-semibold raleway text-[--primary-color]">404</h1>
                    <h2 className="text-5xl text-[--primary-black]">Page Not Found</h2>
                    <p className="text-center leading-8 text-[#666] text-lg">We are sorry, the page you were looking for is either under construction or no longer exits. Lets find a better place for you to go.</p>
                    <Link href="/"><button className={`${utils.button}`}>Back to Home</button></Link>
                </div>
            </div>
        </>
    )
}

export default notFound;
import { utils } from "@/utils/page";
import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className={`border-t ${utils.paddingX} bg-white fixed left-0 bottom-0 w-full p-4 flex justify-between items-center`}>
            <div>
                <h1 className="text-lg text-[--primary-color]">Developed by ~ Zain</h1>
            </div>

            <div className="flex gap-8">
                <Link href={`https://github.com/Md-Zainulabdin`} target="_blank"><AiFillGithub  className="text-2xl text-[--primary-black]"/></Link>
                <Link href={`https://www.linkedin.com/in/m-zain-ul-abdin/`} target="_blank"><AiFillLinkedin className="text-2xl text-[--primary-black]" /></Link>
            </div>
        </div>
    )
}

export default Footer;
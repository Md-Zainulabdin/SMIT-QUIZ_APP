import { utils } from "@/app/utils/page";
import Link from "next/link";

const Hero = () => {
    return (
        <div className={`w-full h-full customFlex ${utils.paddingX} mt-[12%] sm:mt-[15%]`}>
            <div className="hero-text w-[80%] text-center flex flex-col gap-7">
                <h1 className="text-5xl md:text-7xl text-[--primary-color] raleway">Quiz Application</h1>
                <h1 className="text-5xl sm:text-6xl md:text-6xl font-medium text-[--primary-black] raleway">Saylani Mass IT Training Program</h1>
                <p className="text-md text-center leading-7 text-[#777]">Saylani Mass IT Training program is an institute who delivers latest IT education (FREE OF COST). Saylani Mass Training Department is one of the department which is running under Saylani Welfare Trust Management.</p>
                <div className="mt-6">
                    <button className={`${utils.hoverableBtn}`}><Link href='/quizboard'>Start Your Exam</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
"use client";
import { utils } from "@/utils/page";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={`w-full h-screen customFlex ${utils.paddingX} relative`}>
        <div className="overlay w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="hero-text w-[70%] text-center flex flex-col gap-7 relative z-99">
        <h1 className="text-4xl md:text-6xl text-[--primary-color] raleway font-bold">
          Quiz Application
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[--primary-black] raleway">
          Saylani Mass IT Training Program
        </h1>
        <p className="text-md text-center leading-7 text-[#777]">
          Saylani Mass IT Training program is an institute who delivers latest
          IT education (FREE OF COST). Saylani Mass Training Department is one
          of the department which is running under Saylani Welfare Trust
          Management.
        </p>
        <div className="mt-6">
          <button
            className={`border-2 px-4 py-2 md:px-6 md:py-3 text-[--primary-color] transition duration-300 ease-in-out hover:bg-[--primary-color] hover:text-white hover:border-[--primary-color]`}
          >
            <Link href="/quizboard">Start Your Exam</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

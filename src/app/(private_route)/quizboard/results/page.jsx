'use client'
import { useContext } from "react";
import { QuizContext } from "@/app/QuizContext/page";
import { utils } from "@/app/utils/page";
import Link from "next/link";

const ResultPage = () => {

    let { right, wrong, setRight, setWrong, setIndex, index, totalMark } = useContext(QuizContext);
    let percentage = right * 100 / totalMark;

    function reset() {
        setRight(0)
        setWrong(0)
        setIndex(0)
    }

    return (
        <div className={`${utils.paddingX} w-full h-screen`}>
            <div className="w-full h-full customFlex flex-col gap-8">
                <div className="text-center pb-8 border-b-2">
                    <h1 className={`text-4xl raleway ${(percentage > 70) ? 'text-green-500' : 'text-red-500'}`}>{(percentage > 70) ? "Congratulations, You Passed" : "Sorry! you failed"}</h1>
                </div>

                <div className={`circle w-[150px] h-[150px] border-4 customFlex rounded-full ${(percentage > 70) ? 'border-green-500' : 'border-red-500'}`}>
                    <h1 className={`raleway text-4xl font-medium`}>{`${percentage} %`}</h1>
                </div>

                <div className="flex flex-col">
                    <div className="p-4 border-t-2">
                        <h2>Total Question : {totalMark}</h2>
                    </div>

                    <div className="p-4 border-t-2">
                        <h2>Correct Answer : {right}</h2>
                    </div>
                </div>

                <Link href='/'><button className={`${utils.button}`} onClick={reset}>Back to Home</button></Link>
            </div>
        </div>
    )
}

export default ResultPage;
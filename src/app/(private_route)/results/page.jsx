'use client'
import Navbar from "@/app/components/navbar/page";
import { useContext } from "react";
import { QuizContext } from "@/app/QuizContext/page";

const ResultPage = () => {

    let {right, wrong, setRight, setWrong, setIndex, index, totalMark} = useContext(QuizContext);
    let percentage = right * 100 / totalMark;

    return (
        <div className="w-full h-screen">
            <Navbar/>
            <div className="w-full h-full customFlex flex-col gap-8">
                <div className={`circle w-[150px] h-[150px] border-4 customFlex rounded-full ${(percentage > 70) ? 'border-green-500' : 'border-red-500'}`}>
                    <h1 className={`raleway text-4xl font-medium ${(percentage > 70) ? 'text-green-500' : 'text-red-500'}`}>{`${percentage} %`}</h1>
                </div>

                <div className="flex flex-col">
                    <div className="p-4 border-t-2">
                        <h2>Total Question : {totalMark}</h2>
                    </div>

                    <div className="p-4 border-t-2">
                        <h2>Correct Answer : {right}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultPage;
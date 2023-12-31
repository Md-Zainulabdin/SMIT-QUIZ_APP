"use client";
import { useContext } from "react";
import { QuizContext } from "@/QuizContext/page";
import { utils } from "@/utils/page";
import { useRouter } from "next/navigation";

const ResultPage = () => {
  let { replace } = useRouter();
  let { right, wrong, setRight, setWrong, setIndex, index, totalMark } =
    useContext(QuizContext);
  let percentage = (right * 100) / totalMark;
  function reset() {
    setRight(0)
    setWrong(0)
    setIndex(0)
  }

  return (
    <div className={`${utils.paddingX} w-full h-screen`}>
      <div className="w-full h-full customFlex flex-col gap-8">
        <div className="text-center pb-8 border-b-2">
          <h1
            className={`text-4xl raleway ${
              percentage > 70 ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentage > 70
              ? "Congratulations, You Passed"
              : "Sorry! you failed"}
          </h1>
        </div>

        <div
          className={`circle w-[150px] h-[150px] border-4 customFlex rounded-full ${
            percentage > 70 ? "border-green-500" : "border-red-500"
          }`}
        >
          <h1
            className={`raleway text-4xl font-medium ${
              percentage > 70 ? "text-green-500" : "text-red-500"
            }`}
          >{`${Math.ceil(percentage)} %`}</h1>
        </div>

        <div className="flex flex-col text-center">
          <div className="p-4 border-t-2">
            <h2 className="text-xl text-[--primary-black]">
              Total Question : {totalMark}
            </h2>
          </div>

          <div className="p-4 border-t-2">
            <h2 className="text-xl text-[--primary-black]">
              Correct Answer : {right}
            </h2>
          </div>
        </div>

        <button className={`${utils.hoverableBtn}`} onClick={() => {
            replace('/quizboard');
            reset();
        }}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ResultPage;

import { utils } from "@/utils/page";
import { getQuizData } from "@/handlers/handler";
import Link from "next/link";

const QuizCard = () => {
  const data = getQuizData();

  return (
    <div className="w-full h-full customflex pb-12">
      <div className="quiz-cards customFlex gap-8 flex-wrap px-2 sm:px-0 py-6">
        {data.map((card) => (
          <div
            className="w-[100%] md:w-[45%] lg:w-[30%] h-[190px] flex flex-col justify-around border-2 rounded-md p-4 md:p-6"
            key={card?.id}
          >
            <h1 className="text-2xl text-[--primary-black] font-medium">{`${card?.title}`}</h1>
            <span className="text-[#444] py-2">
              Total questions: {card.quiz_questions.length}
            </span>
            <Link href={`/quizboard/${card?.title}`} className="w-full">
              <button className={`w-full ${utils.button} transition duration-300 ease-in-out hover:bg-[--primary-color] hover:text-white hover:border-[--primary-color]`}>
                Click to Start
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;

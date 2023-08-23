import QuizQuestions from "@/app/components/QuizQuestion/page";
import { utils } from "@/utils/page";
import { getQuizData } from "@/handlers/handler";

const QuizId = ({ params }) => {

    let data = getQuizData();
    let questions = data.find(item => item.title === params.quizId);

    return (
        <div className="w-full h-screen customFlex">
            <div className={`${utils.paddingX} w-full h-full`}>
                <div className="header py-6 border-b">
                    <h1 className="text-3xl md:text-4xl raleway text-[--primary-black]">{questions.title} Quiz</h1>
                </div>
                <QuizQuestions questions={questions}/>
            </div>
        </div>
    )
}

export default QuizId;
'use client'
import { QuizContext } from "@/app/QuizContext/page";
import { useContext } from "react";

const QuizQuestions = ({ questions }) => {

    let Context = useContext(QuizContext);
    let { right, wrong, index, setRight, setWrong, setIndex } = Context;
    let {quiz_questions, title} = questions;

    return (
        <div className="quiz_questions mt-10">
            <div className="question w-full p-8 border rounded-md">
                <h2 className="text-2xl text-[--primary-color]">{quiz_questions[index].question}</h2>
            </div>
            <div className="options">
                <div className="row">
                    {quiz_questions[index]?.options.map((option, index) => (
                        <div key={index} className="flex mt-8 gap-4">
                            <input type="radio" name="option" id="option" />
                            <label htmlFor="option">{option}</label>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuizQuestions;
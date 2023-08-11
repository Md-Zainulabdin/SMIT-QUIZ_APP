'use client'
import { QuizContext } from "@/app/QuizContext/page";
import { utils } from "@/app/utils/page";
import { useContext } from "react";
import { useRef } from "react";

const QuizQuestions = ({ questions }) => {

    const Context = useContext(QuizContext);
    const { right, wrong, index, setRight, setWrong, setIndex } = Context;
    const { quiz_questions, title } = questions;
    const optionRef = useRef(null)


    const onSubmitHandler = () => {
        if (quiz_questions.length !== index + 1) {
            console.log('index', index);
            setIndex(index + 1);

            let options = document.querySelectorAll('#option');
            options.forEach(option => console.log(option.value))
        }

    }

    return (
        <div className="quiz_questions mt-10">
            <div className="question w-full p-8 border rounded-md">
                <h2 className="text-2xl text-[--primary-color]">{`${index + 1} -> ${quiz_questions[index]?.question}`}</h2>
            </div>
            <div className="options">
                <div className="row">
                    {quiz_questions[index]?.options.map((option, index) => (
                        <div key={index} className="flex mt-8 gap-4 border px-4 sm:px-8 py-4 rounded-md">
                            <input type="radio" name="option" id="option" value={option} className="text-2xl cursor-pointer" ref={optionRef}/>
                            <label htmlFor="option" className="text-xl">{option}</label>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
            <div className="submit w-full mt-6 p-4 flex justify-end">
                <button className={`${utils.hoverableBtn} px-12`} onClick={onSubmitHandler}>Next</button>
            </div>
        </div>
    )
}

export default QuizQuestions;
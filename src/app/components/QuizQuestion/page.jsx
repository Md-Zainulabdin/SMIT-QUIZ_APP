'use client'
import { QuizContext } from "@/app/QuizContext/page";
import { utils } from "@/app/utils/page";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/navigation'

const QuizQuestions = ({ questions }) => {

    const router = useRouter();
    const Context = useContext(QuizContext);
    let { right, wrong, index, setRight, setWrong, setIndex, setTotalMark } = Context;
    const { quiz_questions, title } = questions;
    let options;

    useEffect(() => {
        options = document.querySelectorAll('#option');
        setTotalMark(quiz_questions.length)
    })

    const reset = () => {
        options.forEach(input => input.checked = false);
    }

    const getAnswer = () => {
        let answer;
        options.forEach(
            (input) => {
                if (input.checked) {
                    answer = input.value;
                }
            }
        )

        if (answer === undefined) {
            alert("Please choose any option")
        }
        else {
            return answer;
        }
    }

    const loadQuestions = () => {
        if (quiz_questions.length !== index + 1) {
            setIndex(index + 1)
        }

        else {
            router.push('/quizboard/results')
        }
    }

    const onSubmitHandler = () => {
        let answer = getAnswer();
        reset();

        if (answer === quiz_questions[index]?.correct_answer) {
            setRight((c) => c + 1);
        }
        else {
            setWrong((c) => c + 1);
        }

        (answer) ? loadQuestions() : null;


    }

    return (
        <div className="quiz_questions mt-10">
            <div className="question w-full p-8 border rounded-md">
                <h2 className="text-xl sm:text-2xl text-[--primary-color]">{`${index + 1} -> ${quiz_questions[index]?.question}`}</h2>
            </div>
            <div className="options">
                <div className="row">
                    {quiz_questions[index]?.options.map((option, index) => (
                        <div key={index} className="flex mt-8 gap-4 border px-4 sm:px-8 py-4 rounded-md">
                            <input type="radio" name="option" id="option" value={option} className="text-2xl cursor-pointer" />
                            <label htmlFor="option" className="text-md sm:text-xl">{option}</label>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
            <div className="submit w-full mt-6 p-4 flex justify-end">
                <button className={`${utils.hoverableBtn} px-12`} onClick={onSubmitHandler}>Next</button>
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

export default QuizQuestions;
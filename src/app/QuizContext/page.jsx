'use client'
import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export const ContextProvider = (props) => {

    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [quizQuestion, setQuizQuestion] = useState('');

    return (
        <QuizContext.Provider value={{
            right, wrong, quizQuestion
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}


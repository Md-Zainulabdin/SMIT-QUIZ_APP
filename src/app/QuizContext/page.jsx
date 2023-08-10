'use client'
import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export const ContextProvider = (props) => {

    const [right, setRight] = useState(0);
    const [wrong, setWrong] = useState(0);
    const [index, setIndex] = useState(0)

    return (
        <QuizContext.Provider value={{
            right, wrong, index, setRight, setWrong, setIndex
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}


"use client";
import { QuizContext } from "@/QuizContext/page";
import { utils } from "@/utils/page";
import { useContext, useRef } from "react";
import { useRouter } from "next/navigation";

const QuizQuestions = ({ questions }) => {
  const inputEls = useRef([]);
  const { push } = useRouter();
  const { index, setRight, setWrong, setIndex, setTotalMark } =
    useContext(QuizContext);
  if (questions) {
    var { quiz_questions } = questions;
  }

  var options = inputEls.current;
  setTotalMark(quiz_questions?.length);

  const reset = () => {
    options?.forEach((input) => (input.checked = false));
  };

  const getAnswer = () => {
    let answer;
    options?.forEach((input) => {
      if (input.checked) {
        answer = input.value;
      }
    });

    if (answer === undefined) {
      alert("Please choose any option");
    } else {
      return answer;
    }
  };

  const loadQuestions = () => {
    if (quiz_questions?.length !== index + 1) {
      setIndex(index + 1);
    } else {
      push("/quizboard/results");
    }
  };

  const onSubmitHandler = () => {
    let answer = getAnswer();
    reset();

    if (answer === quiz_questions[index]?.correct_answer) {
      setRight((c) => c + 1);
    } else {
      setWrong((c) => c + 1);
    }

    answer ? loadQuestions() : null;
  };

  return (
    <div className="quiz_questions mt-10">
      <div className="question w-full p-8 border rounded-md">
        <h2 className="text-xl sm:text-2xl text-[--primary-color]">{`${
          index + 1
        } -> ${quiz_questions[index]?.question}`}</h2>
      </div>
      <div className="options">
        <div className="row">
          {quiz_questions[index]?.options?.map((option, index) => (
            <div
              key={index}
              className="flex mt-8 gap-4 border px-4 sm:px-8 py-4 rounded-md"
            >
              <input
                type="radio"
                name="option"
                id="option"
                value={option}
                className="text-2xl cursor-pointer"
                ref={(el) => (inputEls.current[index] = el)}
              />
              <label htmlFor="option" className="text-md sm:text-xl">
                {option}
              </label>
              <br />
            </div>
          ))}
        </div>
      </div>
      <div className="submit w-full mt-6 p-4 flex justify-end">
        <button
          className={`${utils.hoverableBtn} px-12`}
          onClick={onSubmitHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizQuestions;

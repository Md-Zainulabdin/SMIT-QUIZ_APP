import { getQuizData } from "@/handlers/handler";

const Quiz = () => {

    let data = getQuizData();

    // console.log('data', data);

    return (
        <div>
            <h1>Quiz</h1>
        </div>
    )
}

export default Quiz;
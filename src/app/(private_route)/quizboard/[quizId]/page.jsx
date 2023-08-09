const QuizId = ({params}) => {

    console.log(params);

    return(
        <h1>Hello {params.quizId}</h1>
    )
}

export default QuizId;
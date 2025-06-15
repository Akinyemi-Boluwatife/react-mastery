import { useQuiz } from "./context/QuizContext";

function Option() {
  const { index, questions, answer, dispatch } = useQuiz();

  const question = questions[index];
  //
  const hasAnswered = answer !== null;
  // console.log("Component rendered");
  // console.log(hasAnswered); map

  // console.log(question.question);

  return (
    <div className="option">
      <h2>{question.question}</h2>
      <div className={`option-list`}>
        {question.options.map((option, index) => (
          <button
            className={`btn btn-list ${
              hasAnswered
                ? index === question.correctOption
                  ? "answeredCorrect"
                  : "WrongAnswer"
                : ""
            } ${answer === index ? "answered" : ""}`}
            key={option}
            disabled={answer !== null}
            onClick={() => dispatch({ type: "answerChosen", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Option;

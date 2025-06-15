import { useQuiz } from "./context/QuizContext";

function Next() {
  const { dispatch, index, maxQuestions, answer } = useQuiz();

  if (answer === null) return null;
  if (index + 1 < maxQuestions) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
  }

  if (index + 1 === maxQuestions) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
}

export default Next;

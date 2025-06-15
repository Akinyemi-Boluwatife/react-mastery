import { useQuiz } from "./context/QuizContext";
import Option from "./Option";

function Questions() {
  // console.log(question);
  const { maxQuestions, totalPoints, points, answer, index } = useQuiz();
  return (
    <div className="question-wrapper">
      <div className="pg-qst">
        <progress value={index + Number(answer !== null)} max={maxQuestions} />
        <div className="under-prg">
          <p>
            Question: {index + 1}/{maxQuestions}
          </p>
          <p>
            Points: {points}/{totalPoints}
          </p>
        </div>
        <Option />
      </div>
    </div>
  );
}

export default Questions;

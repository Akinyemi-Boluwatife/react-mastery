import Option from "./Option";

function Questions({
  maxQuestions,
  totalPoints,
  points,
  question,
  answer,
  index,
  dispatch,
}) {
  console.log(question);
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
        <Option question={question} answer={answer} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Questions;

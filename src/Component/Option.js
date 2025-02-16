function Option({ question, answer, dispatch }) {
  const hasAnswered = answer !== null;
  console.log(hasAnswered);

  return (
    <div className="option">
      <h2>{question.question}</h2>
      <div className={`option-list`}>
        {question.options.map((option, index) => (
          <button
            className={`btn btn-list ${
              hasAnswered
                ? index === question.correctOption
                  ? "answeredCorrectly"
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

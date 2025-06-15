import { useQuiz } from "./context/QuizContext";

function Finish() {
  //context api
  const { points, totalPoints, highScore, dispatch } = useQuiz();
  const scorePercentage = Math.floor((points / totalPoints) * 100);
  return (
    <div className="finish-cont">
      <div className="fns-mssg">
        <p>
          Your total score is {points}/{totalPoints} and that's{" "}
          {scorePercentage}%
        </p>
      </div>
      <div className="fns-hgh-rst">
        <p>HighScore: {highScore}</p>
        <button className="btn" onClick={() => dispatch({ type: "restart" })}>
          Restart
        </button>
      </div>
    </div>
  );
}

export default Finish;

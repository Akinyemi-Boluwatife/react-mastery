function Finish({ points, totalPoints, highScore, dispatch }) {
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

import { useQuiz } from "./context/QuizContext";

function Welcome() {
  const { dispatch } = useQuiz();
  return (
    <div className="intro">
      <h2> Dive into React Mastery!</h2>
      <h3> Test your component knowledge in 12 quick questions! </h3>
      <button className="btn" onClick={() => dispatch({ type: "active" })}>
        Start now
      </button>
    </div>
  );
}

export default Welcome;

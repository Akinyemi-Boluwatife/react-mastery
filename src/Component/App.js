import Header from "./Header";
import Main from "./Main";
import Welcome from "./Welcome";
import Loader from "./Loader";
import Error from "./Error";
import Questions from "./Questions";
import Footer from "./Footer";
import Timer from "./Timer";
import Next from "./Next";
import Finish from "./Finish";
import { useQuiz } from "./context/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Welcome />}
        {status === "active" && (
          <>
            <Questions />
            <Footer>
              <Timer />
              <Next />
            </Footer>
          </>
        )}
        {status === "finished" && <Finish />}
      </Main>
    </div>
  );
}

export default App;
// name: react-mastery, use: it is a web app that is like cbe software which i pick answers and it contains questions but the questions are react quizes, key features: track real time quiz scores (points) and tells the user the coorect option afterit has been picked. tech used: react.js and css,

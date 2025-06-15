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

// -Duplicate 'src' folder to 'src-no-context*
// -Review data flow and passed props
// -Identify prop drilling problem
// -Use the Context API to fix the (very small) prop drilling problem
// -Create a new context 'QuizContext with the reducer we created earlier
// -Create a custom provider component "QuizProvider' and provide all the state to the app
// -Create a custom hook to consume state all over the application
// - Delete all unnecessary props
// - IMPORTANT: Note how you actually need state right in App component. This means you need to wrap the whole App into the context (HINT: try in index.js)

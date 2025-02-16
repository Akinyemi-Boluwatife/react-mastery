import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Welcome from "./Welcome";
import Loader from "./Loader";
import Error from "./Error";
import Questions from "./Questions";
import Footer from "./Footer";
import Timer from "./Timer";
import Next from "./Next";

const initialState = {
  questions: [],

  // 'Loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  points: 0,
  index: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loadedQuestions":
      return { ...state, status: "ready", questions: action.payload };
    case "error":
      return { ...state, status: "error" };
    case "active":
      return { ...state, status: "active" };
    case "answerChosen":
      const question = state.questions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          question.correctOption === action.payload
            ? state.points + question.points
            : state.points,
      };

    default:
      throw new Error("This action is unknown");
  }
}

function App() {
  useEffect(function () {
    fetch(`http://localhost:7001/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "loadedQuestions", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  const [{ questions, status, points, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const maxQuestions = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Welcome dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Questions
              maxQuestions={maxQuestions}
              totalPoints={totalPoints}
              points={points}
              question={questions[index]}
              answer={answer}
              index={index}
              dispatch={dispatch}
            />
            <Footer>
              <Timer />
              <Next />
            </Footer>
          </>
        )}
      </Main>
    </div>
  );
}

export default App;

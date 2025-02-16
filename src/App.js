import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Welcome from "./Welcome";
import Loader from "./Loader";
import Error from "./Error";

const initialState = {
  questions: [],

  // 'Loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "loadedQuestions":
      return { ...state, status: "ready", questions: action.payload };
    case "error":
      return { ...state, status: "error" };

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

  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <Welcome />}
      </Main>
    </div>
  );
}

export default App;

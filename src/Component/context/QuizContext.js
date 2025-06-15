import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // 'Loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  points: 0,
  index: 0,
  answer: null,
  highScore: 0,
  timeRemaining: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loadedQuestions":
      return { ...state, status: "ready", questions: action.payload };
    case "error":
      return { ...state, status: "error" };
    case "active":
      return {
        ...state,
        status: "active",
        timeRemaining: state.questions.length * SEC_PER_QUESTION,
      };
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
    case "next":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        highScore: state.highScore,
        questions: state.questions,
      };
    case "tick-tick":
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
        status: state.timeRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("This action is unknown");
  }
}

function QuizProvider({ children }) {
  useEffect(function () {
    fetch(`http://localhost:7001/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "loadedQuestions", payload: data }))
      .catch((err) => dispatch({ type: "error" }));
  }, []);

  const [
    { questions, status, points, index, answer, highScore, timeRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const maxQuestions = questions.length;
  // console.log(maxQuestions);
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        points,
        index,
        answer,
        highScore,
        timeRemaining,
        maxQuestions,
        totalPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was called outside its scope");
  return context;
}

export { QuizProvider, useQuiz };

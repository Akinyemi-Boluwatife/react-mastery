import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

const initialState = {
  questions: [],

  // 'Loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
};

function App() {
  useEffect(function () {
    fetch(`http://localhost:7001/questions`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Header />
      <Main></Main>
    </div>
  );
}

export default App;

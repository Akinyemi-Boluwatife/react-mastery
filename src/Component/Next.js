function Next({ dispatch, index, maxQuestions, answer }) {
  if (answer === null) return null;
  if (index < maxQuestions) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
  }

  if (index === maxQuestions) {
    return (
      <button className="btn" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </button>
    );
  }
}

export default Next;

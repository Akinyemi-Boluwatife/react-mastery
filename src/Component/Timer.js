import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  const mins = Math.trunc(timeRemaining / 60);
  const secs = timeRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick-tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
    },

    [dispatch]
  );

  return (
    <p className="btn">
      {mins < 10 && "0"}
      {mins}:{secs < 10 && "0"}
      {secs}
    </p>
  );
}

export default Timer;

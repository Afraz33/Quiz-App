import { useEffect } from "react";

function FinishScreen({
  points,
  totalPoints,
  dispatch,
  highestPercentage,
  setHighestPercentage,
  secondsPerQuestion,
}) {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  }
  if (percentage >= 80 && percentage < 100) {
    emoji = "🎉";
  }
  if (percentage >= 50 && percentage < 80) {
    emoji = "🙃";
  }
  if (percentage >= 0 && percentage < 50) {
    emoji = "🤨";
  }
  if (percentage === 0) {
    emoji = "🤦‍♂️";
  }

  useEffect(() => {
    if (percentage > highestPercentage) {
      setHighestPercentage(percentage);
      localStorage.setItem("highestPercentage", highestPercentage);
    }
  }, [percentage, highestPercentage, setHighestPercentage]);
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        The highest percentage score is {highestPercentage} %
      </p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({ type: "restart", payload: secondsPerQuestion })
        }
      >
        Restart quiz
      </button>
      <button
        className="btn btn-new"
        onClick={() => dispatch({ type: "newQuiz" })}
      >
        New Quiz
      </button>
    </>
  );
}

export default FinishScreen;

import { useEffect } from "react";
import decodeHtml from "../functions/decodeHTMLEntities";
// Function to shuffle the array of options before displaying for a randomized sequence
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function Options({ questions, dispatch, answer, index }) {
  const hasAnswered = answer !== null;
  const options = [
    questions[index].correct_answer,
    ...questions[index].incorrect_answers,
  ];

  useEffect(() => {
    if (!hasAnswered) {
      shuffleArray(options);
    }
  });

  console.log(hasAnswered);
  return (
    <div className="Options">
      {options.map((option, i) => (
        <button
          key={i}
          className={`btn btn-option ${answer === option ? "answer" : ""} ${
            hasAnswered &&
            (option === questions[index].correct_answer ? "correct" : "wrong")
          } `}
          onClick={() => dispatch({ type: "newAnswer", payload: option })}
          disabled={hasAnswered}
        >
          {decodeHtml(option)}
        </button>
      ))}
    </div>
  );
}

export default Options;

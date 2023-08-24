import Options from "./Options";
import decodeHtml from "../functions/decodeHTMLEntities";
function Questions({ questions, dispatch, answer, index }) {
  const question = decodeHtml(questions[0].question);

  return (
    <div className="Questions">
      <h4>{question}</h4>
      <Options
        questions={questions}
        dispatch={dispatch}
        answer={answer}
        index={index}
      />
    </div>
  );
}

export default Questions;

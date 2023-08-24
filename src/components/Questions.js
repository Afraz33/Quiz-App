import Options from "./Options";

//function to decode html entities
function decodeHtml(html) {
  var txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}
function Questions({ questions, dispatch }) {
  const question = decodeHtml(questions[0].question);

  return (
    <div className="Questions">
      <h4>{question}</h4>
      <Options questions={questions} dispatch={dispatch} />
    </div>
  );
}

export default Questions;

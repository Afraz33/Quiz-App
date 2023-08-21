import Options from "./Options";

function Questions({ questions }) {
  return (
    <div className="Questions">
      <h4>{questions[0].question}</h4>
      <Options questions={questions} />
    </div>
  );
}

export default Questions;

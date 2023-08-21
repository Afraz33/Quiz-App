// Function to shuffle the array of options before displaying for a randomized sequence
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function Options({ questions }) {
  const options = [
    questions[0].correct_answer,
    ...questions[0].incorrect_answers,
  ];
  shuffleArray(options);
  return (
    <div className="Options">
      {options.map((option) => (
        <button className="btn btn-option">{option}</button>
      ))}
    </div>
  );
}

export default Options;

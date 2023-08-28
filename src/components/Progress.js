function Progress({ totalPoints, points, questions, index }) {
  return (
    <header className="progress">
      <progress max={questions.length} value={index + 1}></progress>
      <p>
        Questions <strong>{index + 1}</strong>/ {questions.length}
      </p>
      <p>
        Points <strong>{points ? points : 0}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;

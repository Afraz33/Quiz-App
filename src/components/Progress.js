function Progress({ totalPoints, points, questions, index }) {
  return (
    <header className="progress">
      <progress max={totalPoints / 30} value={points}></progress>
      <p>
        Questions <strong>{index}</strong>/ {questions.length}
      </p>
      <p>
        Points <strong>{points ? points : 0}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;

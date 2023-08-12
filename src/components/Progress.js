function Progress() {
  return (
    <header className="progress">
      <progress max="100" value="90"></progress>
      <p>
        Question <strong>1</strong>/20
      </p>
      <p>
        Correct <strong>2</strong>/10
      </p>
    </header>
  );
}

export default Progress;

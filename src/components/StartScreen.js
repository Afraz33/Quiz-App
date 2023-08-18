function StartScreen({
  setIsClicked,
  setDifficulty,
  setCategory,
  handleSetNumberOfQuestions,
  handleSecondsPerQuestion,
  secondsPerQuestion,
  numberOfQuestions,
  dispatch,
}) {
  function handleClick() {
    dispatch({ type: "loading" });
    setIsClicked((isClicked) => !isClicked);
  }
  return (
    <div className="StartScreen">
      <h3>Welcome to the Quiz App!</h3>
      <h4>Select amongst options for diffeent quizzes</h4>
      <div className="QuizType">
        <div>
          <label>Category:</label>
          <select
            id="category"
            name="category"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="">Any Category</option>
            <option value="21">Sports</option>
            <option value="17">Scince & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
        </div>
        <div>
          <label>No. of Questions:</label>
          <input
            onChange={(e) => {
              handleSetNumberOfQuestions(e.target.value);
            }}
            type="number"
            id="questions"
            name="questions"
            min="1"
            max="50"
            value={numberOfQuestions}
          ></input>
        </div>
        <div>
          <label>Difficulty:</label>
          <select
            onChange={(e) => {
              setDifficulty(e.target.value);
            }}
            id="difficulty"
            name="difficulty"
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Seconds / Question:</label>
          <input
            onChange={(e) => {
              handleSecondsPerQuestion(e.target.value);
            }}
            value={secondsPerQuestion}
            type="number"
            id="questions"
            name="questions"
            min="1"
            max="50"
          ></input>
        </div>
      </div>
      <button onClick={handleClick} className="btn btn-ui">
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;

function StartScreen({ setDifficulty }) {
  return (
    <div className="StartScreen">
      <h3>Welcome to the Quiz App!</h3>
      <h4>Select amongst options for diffeent quizzes</h4>
      <div className="QuizType">
        <div>
          <label>Category:</label>
          <select id="category" name="category">
            <option value="Any Category">Any Category</option>
            <option value="21">Sports</option>
            <option value="17">Scince & Nature</option>
            <option value="28">Science: Computers</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
        </div>
        <div>
          <label>No. of Questions:</label>
          <input
            type="number"
            id="questions"
            name="questions"
            min="1"
            max="50"
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
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Seconds / Question:</label>
          <input
            type="number"
            id="questions"
            name="questions"
            min="1"
            max="50"
          ></input>
        </div>
      </div>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;

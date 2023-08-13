import { useEffect } from "react";

function StartScreen() {
  return (
    <div className="StartScreen">
      <h3>Welcome to the Quiz App!</h3>
      <h4>Select amongst options for diffeent quizzes</h4>
      <div className="QuizType">
        <div>
          <label for="Category">Category:</label>
          <select id="cars" name="cars">
            <option value="Any Category">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label for="questions">No. of Questions:</label>
          <input
            type="number"
            id="questions"
            name="questions"
            min="1"
            max="50"
          ></input>
        </div>
        <div>
          <label for="difficulty">Difficulty:</label>
          <select id="difficulty" name="difficulty">
            <option value="Any Difficulty">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <label for="difficulty">Seconds / Question:</label>
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

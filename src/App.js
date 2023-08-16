import Header from "./components/Header";
import { useState, useEffect } from "react";
import Questions from "./components/Questions";
// import Progress from "./components/Progress";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";

function App() {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(10);
  const [isClicked, setIsClicked] = useState(false);
  const [questions, setQuestions] = useState([]);

  function handleSetNumberOfQuestions(value) {
    const parsedValue = parseInt(value);

    // Check if the parsed value is a valid number
    if (!isNaN(parsedValue)) {
      // Ensure the value is between 0 and 50 (inclusive)
      if (parsedValue >= 0 && parsedValue <= 50) {
        // Update the numberOfQuestions state with the valid value
        setNumberOfQuestions(parsedValue);
      }
    }
  }

  useEffect(() => {
    if (isClicked) {
      // Construct the base URL for your API
      let apiUrl = "https://opentdb.com/api.php?type=multiple";

      //Construct query parameters dynamically based on provided values
      let queryParams = [];

      if (category) {
        queryParams.push(`category=${category}`);
      }

      if (difficulty) {
        queryParams.push(`difficulty=${difficulty}`);
      }
      if (numberOfQuestions) {
        queryParams.push(`amount=${numberOfQuestions}`);
      }
      if (queryParams.length > 0) {
        apiUrl += `&${queryParams.join("&")}`;
      }
      console.log(apiUrl);
      // Now, make the fetch request using the apiUrl
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.results);
          // Handle the API response data
        })
        .catch((error) => {
          // Handle errors
        });
      return () => {
        queryParams = [];
        setIsClicked(false);
      };
      // Reset the buttonClicked state to false after making the API request
    }
  }, [category, difficulty, isClicked, numberOfQuestions]);
  function handleSecondsPerQuestion(value) {
    const parsedValue = parseInt(value);

    // Check if the parsed value is a valid number
    if (!isNaN(parsedValue)) {
      // Ensure the value is between 0 and 50 (inclusive)
      if (parsedValue >= 0 && parsedValue <= 50) {
        // Update the numberOfQuestions state with the valid value
        setSecondsPerQuestion(value);
      }
    }
  }
  console.log(isClicked);
  return (
    <div className="app">
      <Header />
      <Main>
        {/* <Progress /> */}
        <StartScreen
          setIsClicked={setIsClicked}
          setCategory={setCategory}
          setDifficulty={setDifficulty}
          handleSetNumberOfQuestions={handleSetNumberOfQuestions}
          handleSecondsPerQuestion={handleSecondsPerQuestion}
          secondsPerQuestion={secondsPerQuestion}
          numberOfQuestions={numberOfQuestions}
        ></StartScreen>
        <Questions questions={questions} />
      </Main>
    </div>
  );
}

export default App;

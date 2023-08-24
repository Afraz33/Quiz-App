import Header from "./components/Header";
import { useState, useEffect, useReducer } from "react";
import Questions from "./components/Questions";
import Progress from "./components/Progress";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Loader from "./components/Loader";

const initialState = {
  questions: [],
  points: 0,

  // 'lo ng', 'error', 'ready', 'active', 'finished', initial
  status: "initial",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "loading": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "newAnswer": {
      return {
        ...state,
        points:
          action.payload === state.questions[0].correct_answer
            ? state.points + 30
            : state.points,
      };
    }
    default:
      throw new Error("Action unkonwn");
  }
}
function App() {
  const [difficulty, setDifficulty] = useState("");
  const [category, setCategory] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [secondsPerQuestion, setSecondsPerQuestion] = useState(10);
  const [isClicked, setIsClicked] = useState(false);
  const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

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

      // Now, make the fetch request using the apiUrl
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "dataRecieved", payload: data.results });
        })
        .catch((error) => {
          dispatch({ type: "dataFailed" });
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
  console.log(questions[0]?.correct_answer);
  console.log(questions);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "initial" && (
          <StartScreen
            setIsClicked={setIsClicked}
            setCategory={setCategory}
            setDifficulty={setDifficulty}
            handleSetNumberOfQuestions={handleSetNumberOfQuestions}
            handleSecondsPerQuestion={handleSecondsPerQuestion}
            secondsPerQuestion={secondsPerQuestion}
            numberOfQuestions={numberOfQuestions}
            dispatch={dispatch}
          ></StartScreen>
        )}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <>
            <Progress /> <Questions questions={questions} dispatch={dispatch} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;

import Header from "./components/Header";
import { useState } from "react";
// import Progress from "./components/Progress";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
function App() {
  const [difficulty, setDifficulty] = useState("");

  console.log(difficulty);

  return (
    <div className="app">
      <Header />
      <Main>
        {/* <Progress /> */}
        <StartScreen setDifficulty={setDifficulty}></StartScreen>
      </Main>
    </div>
  );
}

export default App;

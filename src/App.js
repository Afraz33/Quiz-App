import Header from "./components/Header";
import Progress from "./components/Progress";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        {/* <Progress /> */}
        <StartScreen></StartScreen>
      </Main>
    </div>
  );
}

export default App;

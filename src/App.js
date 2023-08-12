import Header from "./components/Header";
import Progress from "./components/Progress";
import Main from "./components/Main";
function App() {
  return (
    <div className="app">
      <Header />
      <Main>
        <Progress />
      </Main>
    </div>
  );
}

export default App;

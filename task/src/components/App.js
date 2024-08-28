import logo from "./logo.svg";
import "./App.css";
import Hangman from "./components/Hangman";
import Help from "./components/Help";

function App() {
  return (
    <div className="App">
      <h1>
        <u>Hangman Game</u>
      </h1>
      <br />
      <Hangman />
      <Help />
      <br />
    </div>
  );
}

export default App;

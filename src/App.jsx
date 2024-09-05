import ScoreCount from "../components/scorecount";
import Input from "../components/input";
import Letters from "../components/letters";
import Header from "../components/header";

import "./App.css";

function App() {
  const word = ["potato"];
  const gameTitle = "Welcome to HangMan";
  const subHeading =
    "Type single letters to guess the word before you perish!!!";
  return (
    <div className="App">
      <Header gameTitle={gameTitle} subHeading={subHeading} />
      <Letters word={word} />
    </div>
  );
}
export default App;

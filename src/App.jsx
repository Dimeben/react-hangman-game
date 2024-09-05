import { useState } from "react";
import Game from "../components/game";
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
      <Game />
      <ScoreCount />
      <Letters word={word} />
    </div>
  );
}

{
}
// Letters = { Letters };
// ScoreCount = { ScoreCount };
// Game = { Game };
export default App;

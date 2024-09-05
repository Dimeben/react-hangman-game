import App from "../src/App";
import { useState } from "react";
import Input from "./input";

const Letters = (props) => {
  const [letterGuesses, setLetterGuesses] = useState([]);
  console.log(letterGuesses);
  return (
    <Input setLetterGuesses={setLetterGuesses} letterGuesses={letterGuesses} />
  );
};

export default Letters;

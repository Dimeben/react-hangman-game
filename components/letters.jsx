import { useState } from "react";
import Input from "./input";

const Letters = (props) => {
  const [letterGuesses, setLetterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  console.log(letterGuesses);
  console.log(wordGuesses);
  return (
    <Input
      setLetterGuesses={setLetterGuesses}
      letterGuesses={letterGuesses}
      wordGuesses={wordGuesses}
      setWordGuesses={setWordGuesses}
    />
  );
};

export default Letters;

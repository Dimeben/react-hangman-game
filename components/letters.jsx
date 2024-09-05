import { useState } from "react";
import Input from "./input";

const Letters = (props) => {
  const [letterGuesses, setLetterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  const [correctLetterGuesses, setCorrectLetterGuesses] = useState([]);
  const [incorrectLetterGuesses, setIncorrectLetterGuesses] = useState([]);

  const splitWord = props.word[0].split("");
  const newGuess = letterGuesses[letterGuesses.length - 1];

  const handleCorrectGuess = () => {
    if (
      newGuess &&
      !correctLetterGuesses.some(([letter]) => letter === newGuess)
    ) {
      const correctGuesses = [];
      for (let i = 0; i < splitWord.length; i++) {
        if (splitWord[i] === newGuess) {
          correctGuesses.push([splitWord[i], i]);
        }
      }
      if (correctGuesses.length > 0) {
        setCorrectLetterGuesses((prevGuesses) => [
          ...prevGuesses,
          ...correctGuesses,
        ]);
      }
    }
  };

  const handleIncorrectGuess = () => {
    if (
      newGuess &&
      !incorrectLetterGuesses.some(([letter]) => letter === newGuess)
    ) {
      const incorrectGuesses = [];
      if (!splitWord.includes(newGuess)) {
        incorrectGuesses.push([newGuess]);
      }
      if (incorrectGuesses.length > 0) {
        setIncorrectLetterGuesses((prevGuesses) => [
          ...prevGuesses,
          ...incorrectGuesses,
        ]);
      }
    }
  };

  handleCorrectGuess();
  handleIncorrectGuess();

  console.log({ correct: correctLetterGuesses });
  console.log({ incorrect: incorrectLetterGuesses });

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

import { useState } from "react";
import Input from "./input";
import CorrectLettersDisplay from "./correct-letters-display";
import IncorrectLettersDisplay from "./incorrect-letters-display";

const Letters = ({ word }) => {
  console.log(word[0]);
  const [letterGuesses, setLetterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  const [correctLetterGuesses, setCorrectLetterGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  const splitWord = word[0].split("");
  const newGuess = letterGuesses[letterGuesses.length - 1]
    ? letterGuesses[letterGuesses.length - 1]
    : "";
  const wordGuessed = wordGuesses[wordGuesses.length - 1];

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
      !incorrectGuesses.some(([letter]) => letter === newGuess) &&
      !splitWord.includes(newGuess) // Check if the guess is incorrect
    ) {
      setIncorrectGuesses((prevGuesses) => [...prevGuesses, [newGuess]]);
    }
  };

  const handleIncorrectWordGuesses = () => {
    if (
      wordGuessed &&
      wordGuessed !== word[0] &&
      !incorrectGuesses.some(([guess]) => guess === wordGuessed)
    ) {
      setIncorrectGuesses((prevGuesses) => [...prevGuesses, [wordGuessed]]);
    }
  };

  function handlerCaller() {
    handleCorrectGuess();
    handleIncorrectGuess();
    handleIncorrectWordGuesses();
  }

  handlerCaller();

  return (
    <>
      <Input
        setLetterGuesses={setLetterGuesses}
        letterGuesses={letterGuesses}
        wordGuesses={wordGuesses}
        setWordGuesses={setWordGuesses}
        word={word}
        splitWord={splitWord}
        incorrectGuesses={incorrectGuesses}
        correctLetterGuesses={correctLetterGuesses}
        wordGuessed={wordGuessed}
      />
      <CorrectLettersDisplay
        correctLetterGuesses={correctLetterGuesses}
        splitWord={splitWord}
        wordGuessed={wordGuessed}
        word={word}
      />
      <IncorrectLettersDisplay
        word={word}
        incorrectGuesses={incorrectGuesses}
      />
    </>
  );
};

export default Letters;

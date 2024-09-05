import { useState } from "react";
import Input from "./input";
import CorrectLettersDisplay from "./correct-letters-display";
import IncorrectLettersDisplay from "./incorrect-letters-display";

const Letters = ({ word }) => {
  const [letterGuesses, setLetterGuesses] = useState([]);
  const [wordGuesses, setWordGuesses] = useState([]);
  const [correctLetterGuesses, setCorrectLetterGuesses] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState([]);

  const splitWord = word[0].split("");
  const newGuess = letterGuesses[letterGuesses.length - 1];
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
  const incorrectGuessesArr = [];

  const handleIncorrectGuess = () => {
    if (newGuess && !incorrectGuesses.some(([letter]) => letter === newGuess)) {
      if (!splitWord.includes(newGuess)) {
        incorrectGuessesArr.push([newGuess]);
      }
      if (incorrectGuessesArr.length > 0) {
        setIncorrectGuesses((prevGuesses) => [
          ...prevGuesses,
          ...incorrectGuessesArr,
        ]);
      }
    }
  };

  function handleIncorrectWordGuesses() {
    if (
      wordGuessed &&
      !incorrectGuesses.some(([word]) => word === wordGuessed)
    ) {
      if (word !== wordGuessed) {
        incorrectGuessesArr.push([wordGuessed]);
      }
      if (incorrectGuesses.length > 0) {
        setIncorrectGuesses((prevGuesses) => [
          ...prevGuesses,
          ...incorrectGuessesArr,
        ]);
      }
    }
  }
  console.log(incorrectGuesses);
  handleCorrectGuess();
  handleIncorrectGuess();
  //   handleIncorrectWordGuesses();
  return (
    <>
      <Input
        setLetterGuesses={setLetterGuesses}
        letterGuesses={letterGuesses}
        wordGuesses={wordGuesses}
        setWordGuesses={setWordGuesses}
        handleIncorrectGuess={handleIncorrectGuess}
        handleIncorrectWordGuesses={handleIncorrectWordGuesses}
      />
      <CorrectLettersDisplay
        correctLetterGuesses={correctLetterGuesses}
        splitWord={splitWord}
      />
      <IncorrectLettersDisplay
        word={word}
        incorrectGuesses={incorrectGuesses}
      />
    </>
  );
};

export default Letters;

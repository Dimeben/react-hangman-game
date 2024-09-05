import { useState } from "react";

const Input = ({
  letterGuesses,
  setLetterGuesses,
  wordGuesses,
  setWordGuesses,
  incorrectGuesses,
  splitWord,
  correctLetterGuesses,
  wordGuessed,
  word,
}) => {
  const [inputLetter, setInputLetter] = useState("");
  function handleLetterSubmit(event) {
    event.preventDefault();
    setLetterGuesses([...letterGuesses, inputLetter]);
    setInputLetter("");
  }

  function handleLetterChange(event) {
    setInputLetter(event.target.value);
  }
  const [inputWord, setInputWord] = useState("");
  function handleWordSubmit(event) {
    event.preventDefault();
    setWordGuesses([...wordGuesses, inputWord]);
    setInputWord("");
  }

  function handleWordChange(event) {
    setInputWord(event.target.value);
  }

  let disabled = "";

  if (
    incorrectGuesses.length > 9 ||
    correctLetterGuesses.length === splitWord.length ||
    wordGuessed === word[0]
  ) {
    disabled = "disabled";
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          handleLetterSubmit(event);
        }}
      >
        <label htmlFor="letter-input">Guess a Letter:</label>
        <input
          onChange={(event) => {
            handleLetterChange(event);
          }}
          id="letter-input"
          type="text"
          maxLength={1}
          value={inputLetter}
        />
        <button type="submit" disabled={disabled ? true : false}>
          Guess a Letter
        </button>
      </form>
      <form
        onSubmit={(event) => {
          handleWordSubmit(event);
        }}
      >
        <label htmlFor="word-input">Guess the word:</label>
        <input
          onChange={(event) => {
            handleWordChange(event);
          }}
          id="word-input"
          type="text"
          value={inputWord}
        />
        <button type="submit" disabled={disabled ? true : false}>
          Guess the word
        </button>
      </form>
    </>
  );
};

export default Input;

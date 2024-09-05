import { useState } from "react";

const Input = ({
  letterGuesses,
  setLetterGuesses,
  wordGuesses,
  setWordGuesses,
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
          value={inputLetter}
        />
        <button type="submit">Guess a Letter</button>
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
        <button type="submit">Guess the word</button>
      </form>
    </>
  );
};

export default Input;

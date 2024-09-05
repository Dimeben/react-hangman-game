import { useState } from "react";

const Input = ({
  incorrectGuesses,
  splitWord,
  correctLetterGuesses,
  wordGuessed,
  word,
  setLetterGuesses,
  setWordGuesses,
  letterGuesses,
  wordGuesses,
}) => {
  const [letterInput, setLetterInput] = useState("");
  const [wordInput, setWordInput] = useState("");

  function handleLetterSubmit(event) {
    event.preventDefault();
    if (letterInput.length === 1) {
      setLetterGuesses([...letterGuesses, letterInput.toLowerCase()]);
      setLetterInput("");
    }
  }

  function handleWordSubmit(event) {
    event.preventDefault();
    if (wordInput.length > 1) {
      setWordGuesses([...wordGuesses, wordInput.toLowerCase()]);
      setWordInput("");
    }
  }

  const disabled =
    incorrectGuesses.length > 9 ||
    correctLetterGuesses.length === splitWord.length ||
    wordGuessed === word;

  return (
    <>
      <form onSubmit={handleLetterSubmit}>
        <label htmlFor="letter-input">Guess a Letter:</label>
        <input
          onChange={(event) => setLetterInput(event.target.value)}
          id="letter-input"
          type="text"
          maxLength={1}
          value={letterInput}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled || letterInput.length !== 1}>
          Guess a Letter
        </button>
      </form>

      <form onSubmit={handleWordSubmit}>
        <label htmlFor="word-input">Guess the Word:</label>
        <input
          onChange={(event) => setWordInput(event.target.value)}
          id="word-input"
          type="text"
          value={wordInput}
          disabled={disabled}
        />
        <button type="submit" disabled={disabled || wordInput.length <= 1}>
          Guess the Word
        </button>
      </form>
    </>
  );
};

export default Input;

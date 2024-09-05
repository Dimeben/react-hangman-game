import { useState } from "react";

const Input = ({ letterGuesses, setLetterGuesses }) => {
  const [inputLetter, setInputLetter] = useState("");
  function handleLetterSubmit(event) {
    event.preventDefault();
    setLetterGuesses([...letterGuesses, inputLetter]);
    setInputLetter("");
  }

  function handleLetterChange(event) {
    setInputLetter(event.target.value);
  }
  return (
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
  );
};

export default Input;

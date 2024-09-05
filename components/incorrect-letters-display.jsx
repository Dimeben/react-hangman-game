const IncorrectLettersDisplay = ({ incorrectLetterGuesses }) => {
  return (
    <>
      <p>Incorrect guesses: {incorrectLetterGuesses.join(", ")}</p>
      <img
        src={`../hangman-image/Hangman ${incorrectLetterGuesses.length}.jpg`}
      />
    </>
  );
};

export default IncorrectLettersDisplay;

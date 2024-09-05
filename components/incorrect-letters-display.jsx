const IncorrectLettersDisplay = ({ incorrectGuesses, word }) => {
  return (
    <>
      <p>
        {incorrectGuesses.length > 9
          ? `You Lose! The Word was ${word}`
          : "Incorrect guesses: " + incorrectGuesses.join(", ")}
      </p>
      <img
        src={
          incorrectGuesses.length > 9
            ? `../hangman-image/Hangman 10.jpg`
            : `../hangman-image/Hangman ${incorrectGuesses.length}.jpg`
        }
      />
    </>
  );
};

export default IncorrectLettersDisplay;

const IncorrectLettersDisplay = ({ incorrectLetterGuesses }) => {
  return <p>Incorrect guesses: {incorrectLetterGuesses.join(", ")}</p>;
};

export default IncorrectLettersDisplay;

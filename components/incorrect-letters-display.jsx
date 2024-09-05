const IncorrectLettersDisplay = ({ incorrectLetterGuesses }) => {
  return <p>{incorrectLetterGuesses.join(", ")}</p>;
};

export default IncorrectLettersDisplay;

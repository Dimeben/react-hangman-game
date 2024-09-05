const CorrectLettersDisplay = ({ correctLetterGuesses }) => {
  const correctDisplay = [];

  correctLetterGuesses.forEach((letter) => {
    correctDisplay[letter[1]] = letter[0];
  });
  console.log(correctDisplay);
};

export default CorrectLettersDisplay;

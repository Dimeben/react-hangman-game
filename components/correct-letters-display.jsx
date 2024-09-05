const CorrectLettersDisplay = ({ correctLetterGuesses, splitWord }) => {
  const correctDisplay = [];
  for (let i = 0; i < splitWord.length; i++) {
    correctDisplay.push("_ ");
  }
  correctLetterGuesses.forEach((letter) => {
    correctDisplay[letter[1]] = letter[0];
  });

  return <p>{correctDisplay}</p>;
};

export default CorrectLettersDisplay;
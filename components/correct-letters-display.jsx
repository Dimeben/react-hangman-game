const CorrectLettersDisplay = ({
  correctLetterGuesses,
  splitWord,
  wordGuessed,
  word,
}) => {
  const correctDisplay = [];
  for (let i = 0; i < splitWord.length; i++) {
    correctDisplay.push("_ ");
  }
  correctLetterGuesses.forEach((letter) => {
    correctDisplay[letter[1]] = letter[0];
  });

  let win = "";

  if (
    correctLetterGuesses.length === splitWord.length ||
    wordGuessed === word[0]
  ) {
    win = "win";
  }
  return (
    <>
      <p>{win ? `You Win! The Word was ${word}` : correctDisplay}</p>
    </>
  );
};

export default CorrectLettersDisplay;

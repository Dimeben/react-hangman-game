const IncorrectLettersDisplay = ({ incorrectGuesses, word }) => {
  const winner = incorrectGuesses.filter((guess) => {
    guess === word;
  });

  return (
    <>
      <p>
        {winner.length > 9
          ? `You Lose! The Word was ${word}`
          : "Incorrect guesses: " + winner.join(", ")}
      </p>
      <img
        src={
          winner.length > 9
            ? `../hangman-image/Hangman 10.jpg`
            : `../hangman-image/Hangman ${winner.length}.jpg`
        }
      />
    </>
  );
};

export default IncorrectLettersDisplay;

const IncorrectLettersDisplay = ({ incorrectGuesses, word }) => {
  const winner = incorrectGuesses.filter((guess) => guess[0] !== word[0]);

  return (
    <>
      <p>
        {winner.length > 9
          ? `You Lose! The Word was ${word}`
          : "Incorrect guesses: " + winner.map((guess) => guess[0]).join(", ")}
      </p>
      <img
        src={
          winner.length > 10
            ? `../src/Hangman 10.jpg`
            : `../src/Hangman ${winner.length}.jpg`
        }
      />
    </>
  );
};

export default IncorrectLettersDisplay;

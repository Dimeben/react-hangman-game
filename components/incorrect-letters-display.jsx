import React from "react";
import hangman0 from "../src/images/Hangman-0.jpg";
import hangman1 from "../src/images/Hangman-1.jpg";
import hangman2 from "../src/images/Hangman-2.jpg";
import hangman3 from "../src/images/Hangman-3.jpg";
import hangman4 from "../src/images/Hangman-4.jpg";
import hangman5 from "../src/images/Hangman-5.jpg";
import hangman6 from "../src/images/Hangman-6.jpg";
import hangman7 from "../src/images/Hangman-7.jpg";
import hangman8 from "../src/images/Hangman-8.jpg";
import hangman9 from "../src/images/Hangman-9.jpg";
import hangman10 from "../src/images/Hangman-10.jpg";

const images = {
  0: hangman0,
  1: hangman1,
  2: hangman2,
  3: hangman3,
  4: hangman4,
  5: hangman5,
  6: hangman6,
  7: hangman7,
  8: hangman8,
  9: hangman9,
  10: hangman10,
};

const IncorrectLettersDisplay = ({ incorrectGuesses, word }) => {
  const incorrectCount = incorrectGuesses.filter(
    (guess) => guess[0] !== word[0]
  ).length;

  return (
    <>
      <p>
        {incorrectCount > 9
          ? `You Lose! The Word was ${word}`
          : "Incorrect guesses: " +
            incorrectGuesses.map((guess) => guess[0]).join(", ")}
      </p>
      <img
        src={images[incorrectCount > 9 ? 0 : incorrectCount]}
        alt={`Hangman state ${incorrectCount}`}
      />
    </>
  );
};

export default IncorrectLettersDisplay;

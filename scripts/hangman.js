class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetter = [];
    this.status = "playing";
  }
  calculateStatus() {
    let finished = true;

    this.word.forEach((letter) => {
      if (this.guessedLetter.includes(letter) || letter === ' ') {
      } else {
        finished = false;
      }
    });

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`;
    } else {
      return "Great work! You guessed the word.";
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetter.includes(letter) || letter === " ") {
        puzzle = puzzle + letter;
      } else {
        puzzle = puzzle + "*";
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetter.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetter.push(guess);
    }

    if (isUnique && isBadGuess) {
      // Or
      // this.remainingGuesses--
      this.remainingGuesses = this.remainingGuesses - 1;
    }

    this.calculateStatus();
  }
}

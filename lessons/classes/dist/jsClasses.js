"use strict";

class Player {
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  static randomPlayer() {
    return new Player("Andy", "Samberg");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  loseLife() {
    this.numLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}
const admin = new AdminPlayer("admin", "MCAdmin", ["add", "restore ward"]);

// const player1 = new Player("Fred", "Solis");
// console.log(player1.numLives);W
// player1.loseLife();

// console.log(player1.getScore());
// console.log(player1.numLives);

// console.log(player1.getScore());
// player1.updateScore(1);
// console.log(player1.getScore());

// console.log(player1);
// console.log(player1.fullName);
// console.log(player1.score);

// player1.score = 321;

// console.log(player1.score);

// console.log(player1.fullName);
// player1.fullName = "Wiza Solis";
// console.log(player1);

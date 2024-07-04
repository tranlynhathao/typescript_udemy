// type Name = {
//   first: string;
//   last: string;
// };

// const names: Name = {
//   first: "Fred",
//   last: "Solis",
// };

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} ${song.numStreams}`);
}

const mySong: Song = {
  title: "Paint it, black",
  artist: "Rolling Stones",
  numStreams: 1231234,
  credits: {
    producer: "Woowap",
    writer: "Wawoop",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12456,
  username: "catgirl",
};

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const rockyKitty: CatDog = {
  numLives: 10,
  breed: "Saguate",
  age: 10,
};

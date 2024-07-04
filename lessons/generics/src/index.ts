// const nums: number[] = [];
const nums: Array<number> = [];
const colors: Array<string> = [""];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;

console.log(inputEl);

inputEl.value = "Hacked!";

// const btn = document.querySelector<HTMLButtonElement>(".btn")!;

// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });

function numberIdentity(item: number): number {
  return item;
}
function stringIndetity(item: string): string {
  return item;
}
function booleanIndetity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//   return item;
// }

interface Cat {
  name: string;
  breed: string;
}

function identity<T>(item: T): T {
  return item;
}

// identity<number>(7);
// identity<string>("Hello!");
// identity<Cat>({});

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c", "d"]));
getRandomElement<number>([5, 6, 7, 8, 9, 10, 11]);

getRandomElement([1, 2, 3, 4]);

function merge<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge(
  {
    name: "colt",
  },
  { pets: ["blue", "fred"] }
);

console.log(merge({ name: "Fred" }, { number: 1 }));

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: Lengthy): number {
  return thing.length * 2;
}

printDoubleLength("YEsa");

function makeEmptyArray<T = number>(): Array<T> {
  return [];
}

const numbers = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();

const videos = new Playlist<Video>();

videos.add;

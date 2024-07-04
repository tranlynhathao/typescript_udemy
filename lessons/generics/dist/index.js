"use strict";
// const nums: number[] = [];
const nums = [];
const colors = [""];
const inputEl = document.querySelector("#username");
console.log(inputEl);
inputEl.value = "Hacked!";
// const btn = document.querySelector<HTMLButtonElement>(".btn")!;
// btn.addEventListener("click", () => {
//   console.log("Clicked");
// });
function numberIdentity(item) {
    return item;
}
function stringIndetity(item) {
    return item;
}
function booleanIndetity(item) {
    return item;
}
function identity(item) {
    return item;
}
// identity<number>(7);
// identity<string>("Hello!");
// identity<Cat>({});
function getRandomElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomElement(["a", "b", "c", "d"]));
getRandomElement([5, 6, 7, 8, 9, 10, 11]);
getRandomElement([1, 2, 3, 4]);
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({
    name: "colt",
}, { pets: ["blue", "fred"] });
console.log(merge({ name: "Fred" }, { number: 1 }));
function printDoubleLength(thing) {
    return thing.length * 2;
}
printDoubleLength("YEsa");
function makeEmptyArray() {
    return [];
}
const numbers = makeEmptyArray();
const bools = makeEmptyArray();
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
videos.add;

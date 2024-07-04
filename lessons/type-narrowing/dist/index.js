"use strict";
function triple(value) {
    return typeof value === "number" ? value * 3 : value.repeat(3);
}
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        console.log("NO WORD WAS PASSED");
    }
};
printLetters();
function getRuntime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log({ title: "Amadeus", duration: 160 });
console.log({ title: "Spongebob", numEpisodes: 160, episodeDuration: 30 });
function printFullDate(date) {
    date instanceof Date
        ? console.log(date.toUTCString())
        : console.log(new Date(date).toUTCString());
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    entity instanceof User ? entity : entity;
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
        return "Woof";
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Moo!";
        case "rooster":
            return "KRRRPAW!";
        case "sheep":
            return "Baaa";
        default:
            const _exhaustiveCheck = animal;
            return _exhaustiveCheck;
    }
}
const stevie = {
    name: "Stevie",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));

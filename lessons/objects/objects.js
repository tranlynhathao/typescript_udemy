"use strict";
// type Name = {
//   first: string;
//   last: string;
// };
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log(`${song.title} ${song.numStreams}`);
}
const mySong = {
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
const user = {
    id: 12456,
    username: "catgirl",
};
const happyFace = {
    radius: 4,
    color: "yellow",
};
const rockyKitty = {
    numLives: 10,
    breed: "Saguate",
    age: 10,
};

"use strict";
let age = 21;
age = 23;
age = "24";
age = true;
let coordinates = { x: 1, y: 34 };
coordinates = { lat: 1234.123, long: 234.123 };
function printAge(age) {
    console.log(`You are ${age} years old`);
}
function calculatePrices(price, IVA) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * IVA;
}
// const stuff: any[] = [1, 2, 3, 4, 5]
// const bluff: (number | string)[] = [1, 2, 3, "raf"];
const coords = [];
coords.push({ lat: 321.412, long: 45.412 });
let mood = "Happy";
mood = "Sad";
let today = "Monday";

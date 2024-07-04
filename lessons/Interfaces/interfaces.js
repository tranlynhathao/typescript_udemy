"use strict";
const FULL_NAME = {
    id: 1,
    first: "Fred",
    last: "Solis",
    sayHi: () => {
        return "Hello!";
    },
};
const shirt = {
    name: "Palm Angels T",
    price: 440,
    applyDiscount(discount) {
        const newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shirt.applyDiscount(0.2));
const KITTY = {
    name: "Kitty",
    age: 7,
    breed: "Saguate",
    meow() {
        return "Meow";
    },
};
const KITTYWEAPON = {
    name: "Kitty-Weapon",
    age: 3,
    breed: "bicho",
    meow() {
        return "WOLF";
    },
    job: "drug sniffer",
};
const PIERRE = {
    name: "PIERRE",
    id: 1234,
    email: "superman123@gmail.com",
    level: "Junior",
    languages: ["English", "Spanish"],
};

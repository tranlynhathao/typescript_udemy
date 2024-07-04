interface Name {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi(): string;
}

const FULL_NAME: Name = {
  id: 1,
  first: "Fred",
  last: "Solis",
  sayHi: () => {
    return "Hello!";
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shirt: Product = {
  name: "Palm Angels T",
  price: 440,
  applyDiscount(discount) {
    const newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shirt.applyDiscount(0.2));
interface Cat {
  name: string;
  age: number;
}

interface Cat {
  breed: string;
  meow(): string;
}

const KITTY: Cat = {
  name: "Kitty",
  age: 7,
  breed: "Saguate",
  meow() {
    return "Meow";
  },
};

interface ServiceCat extends Cat {
  job: "drug sniffer" | "bomb" | "guide cat";
}

const KITTYWEAPON: ServiceCat = {
  name: "Kitty-Weapon",
  age: 3,
  breed: "bicho",
  meow() {
    return "WOLF";
  },
  job: "drug sniffer",
};

interface Person {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Person, Employee {
  level: string;
  languages: string[];
}

const PIERRE: Engineer = {
  name: "PIERRE",
  id: 1234,
  email: "superman123@gmail.com",
  level: "Junior",
  languages: ["English", "Spanish"],
};

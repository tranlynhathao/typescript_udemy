interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const jason: Chicken = {
  breed: "Waky",
  eggsPerWeek: 3,
  name: "Jason",
  age: 2,
};

const Bomboclap = (thing: string) => {
  console.log(thing);
};

Bomboclap("fred");

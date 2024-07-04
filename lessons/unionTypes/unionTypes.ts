let age: number | string | boolean = 21;
age = 23;
age = "24";
age = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 1234.123, long: 234.123 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculatePrices(price: number | string, IVA: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * IVA;
}

// const stuff: any[] = [1, 2, 3, 4, 5]

// const bluff: (number | string)[] = [1, 2, 3, "raf"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.412, long: 45.412 });

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";

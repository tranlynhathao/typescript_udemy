// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod();
//   }

//   private secretMethod(): void {
//     console.log("Secreto");
//   }
// }

class Player {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0
  ) {}

  private secretMethod(): void {
    console.log("SECRETO!!!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

const Fred = new Player("Fred", "Solis", 1);
Fred.fullName;
Fred.score = 2;

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print() {
    console.log(`${this.color} ${this.brand} jacket`);
  }
}

const bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "Black");

interface Payable {
  getPay(): number;
}

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number | string;
  greet() {
    console.log("HELLO!");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay() {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay() {
    return this.hourlyRate * this.hoursWorked;
  }
}

const Michael = new FullTimeEmployee("Michael", "Solis", 9500);
console.log(Michael.getPay());

const Fernando = new PartTimeEmployee("Fernando", "Minecraft", 12, 20);
console.log(Fernando.getPay());

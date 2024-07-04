const activeUsers: string[] = ["a", "b", "c", "d", "e"];
activeUsers.push("f");

const ageList: number[] = [1, 2, 3, 4, 5, 6];
ageList[0] = 0;

// const bools: Array<boolean> = [];
const bools: boolean[] = [];

type Name = {
  first: string;
  last: string;
};

const names: Name[] = [];
names.push({ first: "fred", last: "solis" });

const board: string[][] = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["X", "A", "X", "LOL"],
  ["Z", "A", "C"],
  ["R", "A", "F"],
  ["X", "A", "X"],
];

const demo: number[][][] = [[[1], [2], [3], [4], [5]]];

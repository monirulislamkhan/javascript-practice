"use strict";
// const addnum = 10;
// console.log(addnum);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTem = function (temps) {
  let max = 0;
  let min = 10;
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(temperatures)
calcTem(temperatures);

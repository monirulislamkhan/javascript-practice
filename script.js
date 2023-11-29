const addnum = 10;
// console.log(addnum);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTem = function (temps) {
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
    // console.log(temps[i]);
  }
  console.log(max, min);
  // return max;
};
calcTem([10, 20, 13, 1, 88]);
calcTem([5, 7, -5, 10, 190]);
// console.log(maxValue);

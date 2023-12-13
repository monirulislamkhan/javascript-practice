"use strict";
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/* const calcTem = function (temps) {
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

console.log(temperatures);
calcTem(temperatures); */

/* const calcTemNew = function (param1, param2) {
  const temps = param1.concat(param2);
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

console.log(calcTemNew([10, 30, 3, 10], [109, 12, 3, 91])); */
const formControl = document.querySelector(".formValidate");

formControl.addEventListener("click", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").change;
  const mobile = document.getElementById("mobile").value;
  // Error Message
  // const errorName =

  console.log(country);

  // console.log("work it");
});

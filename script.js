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
/* let myName = "Ilya";
console.log(`Hello ${1}`);
console.log(`Hello ${"myName"}`);
console.log(`Hello ${myName}`); */

// let age = Number(prompt("Hello, enter your age"));
// console.log(`Your age is: ${age}`);
const formControl = document.querySelector(".formValidate");

formControl.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const country = document.getElementById("country");
  const mobile = document.getElementById("mobile");

  // Error Message
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const countryError = document.getElementById("countryError");
  const mobileError = document.getElementById("mobileError");

  if (name.value === "") {
    nameError.style.display = "block";
    name.focus();
  } else {
    nameError.style.display = "none";
  }

  if (email.value === "") {
    emailError.style.display = "block";
    email.focus();
  }
});

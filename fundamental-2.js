"use strict";

/* let hasDriversLicence = false;
const testPass = true;
if (testPass) hasDriversLicence = true;
if (hasDriversLicence) console.log("You can Drive"); */

/* function sums(a, b) {
  return a + b;
}
console.log(sums(3, 6)); */
// let name;
/* function showMessage(name) {
  return "hello " + name;
}
let res = showMessage("abc");
res; */
/* function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return "Did parents allow you?";
  }
}

const res = checkAge(17);
res; */

/* // function declearation
function calcAge(birthYeah) {
  const age = 2023 - birthYeah;
  return age;
}

const age1 = calcAge(1988);
// age1

// function expression
const calcAge1 = function (birthYeah) {
  return 2037 - birthYeah;
};

const age2 = calcAge1(1988);
console.log(age1, age2); */

// Arrow function
/* const nowYear = new Date().getFullYear();
const arrowFun = (birthYeah, name) => {
  const age = nowYear - birthYeah;
  return `your name is ${name}, your age is ${age}`;
};
const yourDetails = arrowFun(1990, "Monirul");
console.log(yourDetails); */
/* function calcAge(birthYeah) {
  return 2037 - birthYeah;
}
function yearsUntilRetirement(birthYeah, name) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    `${name} retires in ${retirement} years`;
    return retirement;
  } else {
    `${name}  has already retire 😊`;
    return -1;
  }
}
console.log(yearsUntilRetirement(1990, "Hcorealestates")); */

/* function cutFruitPieces(fruit) {
  return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {
  // const applesPieces = cutFruitPieces(apples);
  // const oranagePieces = cutFruitPieces(oranges);
  const res = `There are ${cutFruitPieces(apples)} apples pieces and ${cutFruitPieces(oranges)} oranges pieces`;
  return res;
};

console.log(fruitProcessor(3, 2));
console.log(fruitProcessor(1.5, 3)); */

/* function calAverage(a, b, c) {
  return (a + b + c) / 3;
}
console.log(calAverage(3, 4, 5));
 */

/* const calcAverage = (a) => a / 3;
console.log(calcAverage(60)); */

/* let age = 18;
const welcome = age >= 18 ? () => "true" : () => "false";
// welcome();
console.log(welcome()); */

/* let num1 = [1, 2, "test", 3];
let num2 = num1;
console.log(num1); */

/* const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
const someChange = (styles[Math.floor((styles.length - 1) / 2)] = "Classics");
console.log(someChange); */

/* let fruits = ["Apple", "Orange", "Plum", "cheeku"];
// fruits.shift();
// console.log(fruits.shift());
console.log(fruits[fruits.length - 1]);
console.log(fruits.at(-1));
for (const fruit of fruits) {
  console.log(fruit);
}
console.log(fruits.length);
const removeLast = fruits.pop();
console.log(removeLast);
console.log(fruits.length);
let shoppingCart = fruits;
shoppingCart.push("Banana");
// console.log(shoppingCart);
// console.log(fruits.length);

let arr = ["A", "B"];
arr.push(function () {
  this;
});

console.log(arr[0]); */

/* let friends = ["Michael", "Steven", "Peter"];
let firstName = "Monirul";
let lastName = "Khan";
let job = "Front End Developer";
const nowYear = new Date().getFullYear();
const monirul = [firstName, lastName, job, nowYear - 1988, friends];
console.log(monirul); */

/* let friends = ["Michael", "Steven", "Peter"];
const calAge = (birthYear) => 2023 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];
const ages = [calAge(years[0]), calAge(years[1]), calAge(years[2]), calAge(years[3]), calAge(years.at(-1))];
console.log(ages);
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);
friends.shift(); // First
console.log(friends);

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} */

/* const date = new Date("2015-03-25");
console.log(date.toLocaleDateString());
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const postDate = date.getDay() <= 9 ? "0" + date.getDay() : date.getDay();
console.log(`${date.getDay()} ${months[date.getDay() + 1]}, ${date.getFullYear()}`); */

/* let todayDate = new Date();
console.log(todayDate.getFullYear()); */
// alert(window.innerHeight);

// dot vs bracket notation
/* const obj = {
  firstName: "Monirul",
  middleName: "Islam",
  lastName: "Khan",
  age: new Date().getFullYear() - 1988,
  job: "Front End Developer",
  friends: ["Michael", "Steven", "Peter"],
  hasDriverLicence: true,
  calcAge: function (birthYeah) {
    return new Date().getFullYear() - age;
    console.log();
  },
}; */

// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${obj.firstName} has ${obj.friends.length} friends, and his best friend is call ${obj.friends[0]}`);

// console.log(obj.firstName);
// console.log(obj["firstName"]);
// const nameKey = "Name";
// console.log(obj["first" + nameKey], obj["middle" + nameKey], obj["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, middleName, lastName, age, job, and friends");

// if (obj[interestedIn]) {
//   console.log(obj[interestedIn]);
// } else {
//   console.log("Wrong Request!, Choose between firstName, middleName, lastName, age, job, and friends");
// }

/*Result require:
Today is : Tuesday.
Current time is : 10 PM : 30 : 38
*/
/* const today = new Date();
let day = today.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
// console.log(dayList[day]);
console.log(`Today is ${dayList[day]}.`);
// let hour = today.getHours();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let amPm = hour >= 12 ? "PM" : "AM";
let currentHour = hour >= 12 ? hour - 12 : hour;
console.log(`Current Time is ${currentHour} ${amPm} : ${minute} : ${second}`); */

// var theta = ($(window).scrollTop() / 600) % Math.PI;
// const mathTest = 600 % Math.PI;
// console.log(mathTest);
/* const message = "Hello";
console.log(message.split());
for (let rep = 10; rep >= 1; rep = rep - 1) {
  console.log(`Repeate no. is ${rep}`);
<<<<<<< HEAD
}
 */

/* console.log(55000 - 55000 / 31);
console.log(55000 - 53225.8064516129); */

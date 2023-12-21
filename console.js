"use strict";
// console.log(NaN + 1);
/* console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));

let x = 1;
x = -1;
console.log(x);
let b = 1,
  c = 3;
console.log(c - b);
// exponentiation
console.log(3 ** 3);
console.log("1" + 2);
console.log(1 + "2");
console.log(typeof ("1" + 2));
console.log(typeof (1 + "2"));
console.log(2 + 2 + "1");
console.log(typeof (2 + 2 + "1"));
console.log(6 - "2");
console.log(typeof (6 - "2"));
console.log(6 / "2");
console.log(typeof (6 / "2"));
let d = 1;
console.log(+d);
console.log(+true);
console.log(+"");

console.log(2 > 1);
console.log(2 == 1);
console.log(2 != "2"); */

// if(0) console.log('');

// if(1||0) console.log('true')
// let hour = 9;
// if (hour < 10 || hour > 18) console.log("The office is closed.");
// console.log(1 && 0);
// console.log(1 && "Monirul");

// console.log(false || "");

// let firstName = "";
// let lastName = "";
// let nickName = "";

// console.log(firstName || lastName || nickName || "Anonymous" || 2);

// let hour = 12;
// let minute = 10;
// let result = hour === 1 || "The time is 12:30";
// console.log(result);

/* let x = 1;
let res = x > 0 && "Greater than zero!";
console.log(res); */

/* console.log(!"");
console.log(!0);
console.log(!!"non-empty string");
console.log(!null); */

// alert(alert(1) || alert(3));
// // alert(1 && null && 2);


let userName = prompt(`Who's there?`, "");
// let userName = "Admin";
if (userName === "Admin") {
  // if (userName) {
  //   console.log("Enter Your Password");
  // }
  alert("Welcome");
} else if (userName === !"Admin") {
  alert("I don't know you");
} else {
  alert("Canceled");
}

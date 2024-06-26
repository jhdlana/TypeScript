"use strict";
// console.log("Hellow TypeScript")
// const someString = "typeScript!";
// someString.endsWith("~");
// import { printName } from "./util";
// printName("typeScript")
const a = '';
const b = "";
const c = ``;
let myName = "Steve";
let message = `Hello, ${myName}`;
message.toUpperCase();
let n = 100;
let infinity = Infinity;
let minusInfinity = -Infinity;
let iAmNotANumber = NaN;
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("hello we are open!");
}
if (!isCompleted) {
    console.log("job not complete");
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null 널 타입
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("ju"); // user : "ju"
logout(); // user : null
var myNull = null;
console.log("Null", myNull);
// any 타입 (어떠한 값도 참고 가능)
let someValue;
// someValue.toString();
// someValue = false;
// someValue.toFixed();
var myAny = "This can be anything";
console.log("Any string: ", myAny);
myAny = 10;
console.log("changed to number: ", myAny);
myAny = false;
console.log("changed to boolean: ", myAny);

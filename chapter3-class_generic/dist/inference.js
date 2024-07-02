"use strict";
/*
    타입 추론 (Type Inference)
*/
// 1. 변수
let myNumber = 5; // myNumber 은 Number type
let myString = "Hello"; // myString 은 string type
let myBool = true; // myBool 은 Boolean type
myNumber = 10; // O
// myNumber = "hi"; // ERROR
// 2. 함수 변환 타입
function add(x, y) {
    return x + y; // return `${x}${y}` 반환을 이렇게 하면 반환값은 string 타입으로 반환 받은 n의 타입은 string 타입으로 지정됨.
}
const n = add(10, 5); // n 은 add함수의 리턴값이 타입 추론에 의해 number 타입을 갖음
// 3. 배열 & 객체
let nums = [1, 2, 3, 4];
let user = { name: "Eli", age: 30 };
nums.push(10);
// nums.push("hi") // ERROR => nums가 타입 추론으로 인해 number type의 배열을 갖으므로 string 타입을 push 못함
user.age = 40;
// user.age = "hi" // ERROR => user 객체의 age는 타입 추론으로 인해 string 타입을 갖으므로 string 타입을 못받음.
let mixedValues = [1, 2, 3, "red", "blue", "green"];
mixedValues.push("hi");
mixedValues.push(10);
// mixedValues.push(true) // ERROR => mixedValues는 number, string 타입을 갖지만 boolean 타입을 갖지 않으므로 에러.

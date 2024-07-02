"use strict";
/*
    타입 단언 ( Type Assertion )
*/
// !!! 타입이 명확할 때 사용 !!!
// < 사용법 > : 표현식 as 지정할 타입
const someValue = "Hey there";
const someValue1 = "Hey there";
// const len = someValue.length // ERROR =>  length라는 속성은 string, 배열 타입에서 가능한데 타입을 unknown이라 지정해서 오류
const len = someValue.length; // 타입 단언을 사용하여 someValue를 string 타입으로 지정 => unknown -> string
const len1 = someValue1.length; // O
// DOM 과 관련해서 사용해보기
const button = document.getElementById("button"); // getElementById가 반환하는 타입이 HTMLElement이다. 그래서 변수 button은 HTMLElement타입을 갖음
const button1 = document.getElementById("button");
// button.disabled = false; // ERORR => HTMLElement타입은 disabled 속성이 없음. => HTMLButtonElement에는 접근 가능 ->  그래서 타입 단언이 필요.
button1.disabled = false; // HTMLButtonElement는 disabled에 접근 가능
// button1이 실제로 존재하는지 확인해야함. => 만약 존재하지 않으면 null 값이 반환되므로 확인 여부 필요
if (button1 instanceof HTMLButtonElement) {
    button1.disabled = false; // HTMLButtonElement는 disabled에 접근 가능
}
if (button1) {
    button1.disabled = false; // HTMLButtonElement는 disabled에 접근 가능
}

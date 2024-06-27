"use strict";
/*
    유니언 리터럴
*/
// 1. 유니언 기초
let userId;
userId = 1;
userId = "ju";
// userId = true // Boolean 할당 안됨
// userId = {} // Object 할당 안됨
function printUserId(id) {
    console.log(id);
}
printUserId("hi");
printUserId(10);
// printUserId({}) // 객체 할당 안됨
// 2. type narrowing
function processValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    // 숫자일 경우
    return value.toString().toUpperCase();
}
// 3. 배열 사용 예시
let mixedValues = [];
// 배열에 추가
mixedValues.push("ji");
mixedValues.push(10);
// 4. 리터럴과 유니언 타입
// 값과 타입으로 동시에 사용 가능
function toggle(option) {
    console.log(option);
}
toggle("on");
let tShirtSize;
tShirtSize = "xs";
// tShirtSize = "xxs"; // "xxs" 라는 type이 없으므로 에러
function setSize(size) {
    switch (size) {
        case "xs":
            // xs 처리
            break;
        case "s":
            // s 처리
            break;
        // ....
    }
}
let responseCode;
responseCode = 200;
responseCode = 503;
// responseCode 404 // responseCode 에서 SuccessCode와 ErrorCode에서 404를 포함하지 않기때문에 애러

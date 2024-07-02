"use strict";
/*
    제네릭 ( Generic )
     제네릭 타입 T를 사용하여 데이터를 저장하고 반환하는 간단한 컨테이너를 정의합니다.
     이로 인해 Box 클래스는 어떤 타입의 데이터도 저장할 수 있습니다.

     <타입> => <T>
*/
// function genericFunction<T>(arg: T): T {
//     return arg;
// }
// interface GenericInterface<T> {
// }
// class GenericClass<T> {
// }
// generic 사용한 부분들
// 1. Array<type>
let numbers = [1, 2, 3, 4, 5];
let strings = ["a", "b", "c"];
// 2. document.querySelector()
let div = document.querySelector("#myDiv1");
let button10 = document.querySelector("#myButton1");
// querySelector을 사용할때는 속성이나 메서드에 접근하기 전에 button이 존재하는지의 여부를 확인하기
// button10이 존재하기 전에 click()이라는 메서드에 접근할수없으므로 ? (조건부) 붙이기
button10 === null || button10 === void 0 ? void 0 : button10.click();
// 3. 함수 generic
// function getFirstElement(arr: number[]) {
//     if(arr.length) {
//         return undefined
//     }
//     return arr[0]
// }
// function getFirstStringElement(arr: string[]) {
//     if(arr.length) {
//         return undefined
//     }
//     return arr[0]
// }
// But..!! 코드 중복이 발생 => generic 함수 이용
function getFirstElement(arr) {
    if (arr.length) {
        return undefined;
    }
    return arr[0];
}
// firstNumer와 firstString 은 각각 반환받는 타입에 맞춰서 타입지정됨.
const firstNumber = getFirstElement(numbers);
const firstString = getFirstElement(strings);
let strObj = {
    name: "ju"
};
let numObj = {
    age: 10
};
// 문자열, 숫자 
let entry = {
    key: "age",
    value: 30
};
// 숫자, 문자열[배열]
let entry2 = {
    key: 1,
    value: ["hi", "hello"]
};

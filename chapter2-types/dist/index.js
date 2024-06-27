"use strict";
// 배열 타입 방법 1 : type []
let nums = [1, 2, 3, 4, 5]; // 숫자만 허용 == 정적
let strs = ["a", "b", "c"]; // 문자열만 허용 == 정적
let bools = [false, false, true]; // boolean만 허용 == 정적
nums.push(6);
nums.push(7);
// nums.push("8") // 문자열 타입을 숫자용 타입에 push할 수 없다
nums[0] = 10;
// nums[1] = "11" // 안됨
bools.push(true);
// 배열 타입 방법 2 : Array<>
let nums1 = [1, 2, 3, 4, 5]; // 숫자만 허용 == 정적
let str1 = ["a", "b", "c"]; // 문자열만 허용 == 정적
nums1.push(6);
nums1.push(7);
str1.push("d");

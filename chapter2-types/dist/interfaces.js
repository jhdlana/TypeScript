"use strict";
/*
    인터페이스
*/
const userA = {
    id: 1,
    name: "ju",
    isPremium: true,
    someMethod() {
        console.log("some method called");
    }
};
const testUser = {
    id: 100,
    name: "jo",
};
//testUser.id = 300 // readonly 로 초기값을 변환할 수 없음. 에러 발생
testUser.isPremium = true;
const testUser2 = {
    id: 100,
    name: "ju",
    isPremium: false,
    greet() {
        console.log("hi");
    },
    eat() {
        return "hamburger";
    },
    drink(x) {
        return x;
    },
    message(meet) {
        return `${meet}, ${this.name}`;
    },
};
testUser2.greet();
testUser2.drink(3);
testUser2.message("hello"); // hello, ju
const child = {
    name: "juji",
    age: 26,
    studentId: 2019,
    employeeId: 2024
};

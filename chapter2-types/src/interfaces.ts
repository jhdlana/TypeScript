/*
    인터페이스
*/

// 1. 기본 문법
// interface 이름 {
//     속성 이름: 속성 타입;
//     속성 이름: 속성 타입;
//     메서드 이름(): 메서드 타입;
// }

interface User {
    id: number;
    name: string;
    isPremium: boolean;
    someMethod(): void;
}

const userA: User = {
    id: 1,
    name: "ju",
    isPremium: true,
    someMethod() {
        console.log("some method called")
    }
}



// 2. type alias VS interface
// !!! 두 기능의 목적은 크게 다르지 않음. !!!
// !!문법 차이가 남. !!
//      [type alias] : ! 객체 포함, 리터럴, 원시값 등을 타입 ! 으로 가질 수 있디.
//      type alias => type User = {} 

//      [interface] : ! 객체 타입 !으로 사용해야 함 & 확장 문법이 다름.
//      interface => interface User {} 



// 3. readonly & optional property
interface User1 {
    readonly id: number;
    name: string;
    isPremium?: boolean;
}

const testUser: User1 = {
    id: 100,
    name: "jo",
}

//testUser.id = 300 // readonly 로 초기값을 변환할 수 없음. 에러 발생
testUser.isPremium = true


// 4. 메서드/함수 타입
interface User2 {
    readonly id: number;
    name: string;
    isPremium?: boolean;
    greet(): void;
    eat(): string;
    drink(x: number): number;
    message(meet: string): string;
}

const testUser2: User2 = {
    id: 100,
    name: "ju",
    isPremium: false,
    greet() {
        console.log("hi")
    },
    eat() {
        return "hamburger"
    },
    drink(x: number) {
        return x;
    },
    message(meet: string) {
        return `${meet}, ${this.name}`
    },
}

testUser2.greet();
testUser2.drink(3)
testUser2.message("hello") // hello, ju


// 5. 확장 및 조합
interface Person {
    name: string,
    age: number
}

interface Employee {
    employeeId: number;
}

interface Student extends Person, Employee {
    studentId: number;
}

const child: Student = {
    name: "juji",
    age: 26,
    studentId: 2019,
    employeeId: 2024
}


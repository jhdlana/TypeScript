// console.log("Hellow TypeScript")

// const someString = "typeScript!";

// someString.endsWith("~");

// import { printName } from "./util";

// printName("typeScript")

const a: string = ''
const b: string = ""
const c: string = ``

let myName: string = "Steve"
let message: string = `Hello, ${myName}`

message.toUpperCase()

let n: number = 100;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAmNotANumber: number = NaN;

let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen){
    console.log("hello we are open!")
}

if(!isCompleted) {
    console.log("job not complete")
}
// && || !

let isAvailable: boolean = isOpen && !isCompleted

// null 널 타입
let user: string | null = null;

function login(userName: string) {
    user = userName;
}

function logout() {
    user = null;
}

login("ju") // user : "ju"
logout() // user : null

// any 타입 (어떠한 값도 참고 가능)

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
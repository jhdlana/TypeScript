/*
    튜플
*/

// 1. 기본 문법
let myTuple: [string, number, boolean]

myTuple = ["hello", 15, false] // OK
// myTuple = ["hi", false, 30] // Error -> 순서가 뒤바뀜
// myTuple = ["hi", 15] // Error -> 세개의 속성(프로퍼티)를 원하는데 두개만 지정


// 사용 예시 1
function getUserInfo(): [number, string] {
    return [1, "sam"]
}
// 구조 분해 할당으로 변수에 값을 저장
const [userid, username] = getUserInfo()


// 사용 예시 2
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price]

const vanila: IceCream = ["Vanila", 500]

vanila[0] // 항상 문자열 타입
vanila[1] // 항상 숫자 타입



// 사용 예시 3

type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -95])
coords.push([38, -105])


for(const [lat, lng] of coords) {
    console.log(lat, lng);
}
"use strict";
// < 기본 객체 타입 > 
// 1. 기본 형태 
// {
//     property_name: property_type
// }
// 2. 타입 명시
let monitor = { brand: "", price: 0 };
monitor.brand = "LG";
monitor.price = 120;
monitor = {
    brand: "Samsung",
    price: 130
};
// price를 찾을 수 없어서 에러 발생.
// monitor = {
//     brand: "mac",
// }
// 3. 타입 추론 (객체 리터럴로 ts에서 타입을 추론해줌)
//(객체 리터럴 == 중괄호{}를 사용하여 객체를 직접 정의하는 방법 => 속성과 값을 한 번에 정의 할 수 있음.)
// 객체 리터럴로 객체 정의 및 속성 & 타입 & 초기값 생성
let monitor1 = {
    brand: "LG", // 타입 = 문자열 정의내림
    price: 120 // 타입 = 숫자 정의내림
};
// 에러 발생 => 타입 추론으로 brand는 임의로 문자열로 정의 됐으므로
// monitor.brand = 123
// 4. Optional 속성 ( ? ) // 필수가 아닌 선택적 속성을 갖음 => 객체 초기화할때 정의 안해도 됨
let user;
// user 객체 초기화
user = {
    id: "1234",
    name: "ju",
    // age: 12 // age를 정의 안해도 상관없음 == 에러 안뜸
};
// 5. Readonly 속성 (읽기 전용) == 객체가 생성될때만 정의 내리고 그 이후에는 할당하면 안됨
let user1;
// user 객체 초기화
user1 = {
    id: "1234",
    name: "ju",
};
user1.name = "he";
// user1.id = "5678" // 에러 발생 => readonly로 초기값을 변경할 수 없음.
// 실무에서 자주 쓰이는 readonly 패턴 => 환경변수 담을 때 주로 사용
let apiConfig;
// 만들어진 type 별칭(UserType)을 가지고 객체 두개를 만듬
let user2 = {
    id: "1",
    name: "juji",
    age: 20
};
let user3 = {
    id: "2",
    name: "juji1",
    age: 21
};
let users = [];
users.push(user2);
users.push(user3);
const payload = {
    timestamp: 123456,
    type: 'event',
    user: {
        id: "12",
        isActive: true,
        email: ["123@123", "1@1"]
    }
};

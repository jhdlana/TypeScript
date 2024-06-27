/*
    함수 타입
*/  


// 1. Parameter
function add(x:number,y: number) : number {
    return x+y;
}
// 반환 값 타입을 number 지정했으므로 result값의 타입이 자동으로 number가 됨.
const result = add(10, 5)


// 2. Parameter II
function addToCart(name: string, price: number, quantity: number) {
    return `${name}, ${price}, ${quantity}`;
}

addToCart("orange", 25, 3);
//addToCart("apple", 30); // 세개의 파라미터를 전달받아야하는데, 두개만 전달받아서 에러 발생


// 3. Default Parameter 
// quantity: number = 1 로 기본값 설정해줌 (default) => 함수를 호출할때 quantity는 생략이 가능
function addToCart1(name: string, price: number, quantity: number = 1) {
    return `${name}, ${price}, ${quantity}`;
}
// 파라미터를 두개 전달할 경우 & 세개 전달할 경우를 지원함.
addToCart1("pineapple", 40) // => ` "pineapple", 40, 1 ` 이렇게 반환이 됨.
addToCart1("mango", 50, 3) // => ` "mango", 50, 3 ` 으로 quantity의 기본값 1에서 3으로 바뀌어 반환됨.


// 4. optional parameter
function addToCart2(name: string, price: number, quantity?: number ) {
    // quantity값이 전달 되면 그 값을 사용하고, 전달 된게 없으면 1 을 사용해라 -> undefined 방지
    return `${name}, ${price}, ${quantity || 1}`;
}

// quantity는 선택으로 전달되지 않으면, quantity의 반환값은 undefined가 됨
addToCart2("apple", 24)
addToCart2("straw", 31, 4)


// 5. Contextual Typing ( 문맥상 타이핑 )
// map((element) => {element.작업} ), reduce(), filter(), forEach() -> 이런 함수들은 callback 함수를 사용함.
const numbers: number[] = [1,2,3,4,5]
const letters: string[] = ["a", "b", "c", "d"]

numbers.map((num) => {
    return num + 1
})

// letters.forEach((letter) => {
//     letter.
// })



// 6. Return type annotation
function addTwoValues(x:number, y:number): string {
    // 반환값을 string 타입으로 명시 했기 때문에 문자열 타입으로 return 해야함.
    return `${x}${y}`;
}

function isTen(x:number, y:number): boolean {
    // let ten:number = x+y;
    // if(ten == 10) {
    //     return true;
    // } else {
    //     return false;
    // }
    // 10 이면 true, 그 외의 숫자는 false 반환
    return x+y === 10;
}


// 7. void, never
// void는 반환 값이 없음 return X
function logMessage(message: string): void {
    console.log(message)
}

// never 무한 or 예외 처리할때 사용 -> 용도가 매우 제한적 -> 개발할때 많이 안쓰임
function throwError(message: string): never {
    throw new Error(message)
}
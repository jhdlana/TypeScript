/*
    클래스 ( Classes )
*/
// 문법
// class Country {
//     필드
//     메서드
// }

// // 인스턴스 화
// let country = new Country();


interface ContinentInterface {
    getContinentName(): string;
}

interface ContryInterface {
    capital: string;
    getInfo() : string;
}

class Continent implements ContinentInterface {
    protected continentName: string = "";

    constructor(name: string) {
        this.continentName = name;
    }

    getContinentName() {
        return this.continentName;
    }

}

class Country extends Continent implements ContryInterface{
    // # = private
    #name: string = "";
    capital: string = "";

   

    // 자바스크립트에서의 생성자는 항상 'constructor'이라는 이름을 갖음.
    constructor(continentName:string, name: string, capital: string) {
        super(continentName)
        this.#name = name;
        this.capital = capital;
    }

    getInfo() {
        return `${this.#name}, ${this.capital}, ${this.getContinentName()}`
    }
}


let country = new Country("asia","ju", "ko")
console.log(country)
console.log(country.getInfo())

// name을 private로 지정했으므로 
// country.name = "jiii"
country.capital = "koooo"
console.log(country)
console.log(country.getInfo())


abstract class AbstractCountry {
    name: string = "";
    capital: string = "";

    constructor(name: string, capital: string ) {
        this.name = name;
        this.capital = capital;
    }

    setUp(): void{
        console.log("setup complete")
    }
    // 추상 클래스 내부의 추상 메서드는 상속받는 클래스에서 꼭 정의해야함.
    abstract displayInfo(): void;
}

// 추상클래스를 인스턴스 화 할 수 없음 => 누군가 상속받아서 사용해야함
// const MyCountry = new AbstractCountry()

class MyCountry extends AbstractCountry {
    displayInfo(): void {
        console.log('display info called')
    }
}

const myCountry = new MyCountry("ji", "tr");
myCountry.setUp();
myCountry.displayInfo();
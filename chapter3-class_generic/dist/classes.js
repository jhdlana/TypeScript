"use strict";
/*
    클래스 ( Classes )
*/
// 문법
// class Country {
//     필드
//     메서드
// }
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Country_name;
class Continent {
    constructor(name) {
        this.continentName = "";
        this.continentName = name;
    }
    getContinentName() {
        return this.continentName;
    }
}
class Country extends Continent {
    // 자바스크립트에서의 생성자는 항상 'constructor'이라는 이름을 갖음.
    constructor(continentName, name, capital) {
        super(continentName);
        // # = private
        _Country_name.set(this, "");
        this.capital = "";
        __classPrivateFieldSet(this, _Country_name, name, "f");
        this.capital = capital;
    }
    getInfo() {
        return `${__classPrivateFieldGet(this, _Country_name, "f")}, ${this.capital}, ${this.getContinentName()}`;
    }
}
_Country_name = new WeakMap();
let country = new Country("asia", "ju", "ko");
console.log(country);
console.log(country.getInfo());
// name을 private로 지정했으므로 
// country.name = "jiii"
country.capital = "koooo";
console.log(country);
console.log(country.getInfo());
class AbstractCountry {
    constructor(name, capital) {
        this.name = "";
        this.capital = "";
        this.name = name;
        this.capital = capital;
    }
    setUp() {
        console.log("setup complete");
    }
}
// 추상클래스를 인스턴스 화 할 수 없음 => 누군가 상속받아서 사용해야함
// const MyCountry = new AbstractCountry()
class MyCountry extends AbstractCountry {
    displayInfo() {
        console.log('display info called');
    }
}
const myCountry = new MyCountry("ji", "tr");
myCountry.setUp();
myCountry.displayInfo();

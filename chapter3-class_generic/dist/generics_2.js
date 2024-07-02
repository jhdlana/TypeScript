"use strict";
/*
    재네릭 ( Generic ) - Class
*/
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
var _Item_content, _UserRepository_users, _ProductRepository_products;
class Item {
    constructor() {
        _Item_content.set(this, void 0);
        __classPrivateFieldSet(this, _Item_content, null, "f");
    }
    setItem(value) {
        __classPrivateFieldSet(this, _Item_content, value, "f");
    }
    // 이 함수는 매개변수는 없고 반환값 및 타입을 지정해줌
    getItem() {
        return __classPrivateFieldGet(this, _Item_content, "f");
    }
}
_Item_content = new WeakMap();
const numberItem = new Item();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환됨.
const stringItem = new Item();
stringItem.setItem("hei");
stringItem.getItem(); // hei 반환됨.
class UserRepository {
    constructor() {
        _UserRepository_users.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _UserRepository_users, "f").find(user => user.id === id);
    }
    save(user) {
        __classPrivateFieldGet(this, _UserRepository_users, "f").push(user);
    }
}
_UserRepository_users = new WeakMap();
class ProductRepository {
    constructor() {
        _ProductRepository_products.set(this, []);
    }
    findById(id) {
        return __classPrivateFieldGet(this, _ProductRepository_products, "f").find(product => product.id === id);
    }
    save(product) {
        __classPrivateFieldGet(this, _ProductRepository_products, "f").push(product);
    }
}
_ProductRepository_products = new WeakMap();
const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "jo"
});
userRepo.save({
    id: 2,
    name: "ji"
});
console.log(userRepo);
console.log(typeof userRepo);
console.log(userRepo.findById(1));
const productRepo = new ProductRepository();
productRepo.save({
    id: 10,
    price: 100,
    name: "keyboard"
});
productRepo.save({
    id: 30,
    price: 200,
    name: "Mouse"
});
console.log(productRepo.findById(10));

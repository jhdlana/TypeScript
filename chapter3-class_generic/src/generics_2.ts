/*
    재네릭 ( Generic ) - Class
*/

class Item<T> {
    #content: T | null;

    constructor() {
        this.#content = null;
    }

    setItem(value: T) {
        this.#content = value;
    }

    // 이 함수는 매개변수는 없고 반환값 및 타입을 지정해줌
    getItem(): T | null{
        return this.#content;
    }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem() // 100 반환됨.



const stringItem = new Item<string>();
stringItem.setItem("hei")
stringItem.getItem(); // hei 반환됨.


// 2. class & interface 같이 사용해보기

interface User {
    id: number;
    name: string
}

interface Product {
    id: number;
    price: number;
    name: string;
}

interface Store<T> {
    // user를 id로 찾는 메서드
    findById(id: number): T | undefined;
    // user를 저장하는 메서드 -> 반환값이 필요없음
    save(item: T): void;
}

class UserRepository implements Store<User> {
    #users: User[] = [];

    findById(id: number): User | undefined {
        return this.#users.find(user => user.id === id)
    }

    save(user: User): void {
        this.#users.push(user)
    }

}

class ProductRepository implements Store<Product> {
    #products: Product[] = [];

    findById(id: number): Product | undefined {
        return this.#products.find(product => product.id === id)
    }

    save(product: Product): void {
        this.#products.push(product)
    }
}

const userRepo = new UserRepository();
userRepo.save({
    id: 1,
    name: "jo"
})

userRepo.save({
    id: 2,
    name: "ji"
})

console.log(userRepo)
console.log(typeof userRepo)
console.log(userRepo.findById(1))

const productRepo = new ProductRepository();

productRepo.save({
    id: 10,
    price: 100,
    name: "keyboard"
})

productRepo.save({
    id: 30,
    price: 200,
    name: "Mouse"
})

console.log(productRepo.findById(10))
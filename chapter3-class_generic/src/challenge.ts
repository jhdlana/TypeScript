// 제네릭 클래스 ( Q 방식으로 움직이는 클래스 )
// Q : 선형 자료구조, FIFO ( first-in-first-out )

class GenericQueue<T> {
    private items: T[] = [];

    // enqueue 메서드 ( 큐를 데이터에 추가 )
    enqueue(item: T) : void {
        this.items.push(item)
    }
    // dequeue 메서드 ( 큐의 맨처음 데이터를 꺼낸다 ) - 삭제 O
    dequeue() : T | undefined {
        return this.items.shift();
    }
    // peak 메서드 ( 큐의 맨처음 데이터를 확인 ) - 삭제 X
    peak() : T | undefined {
        return this.items[0]
    }
    // size 메서드 ( 현재 큐의 사이즈 반환 )
    size() : number {
        return this.items.length;
    }
}

const stringQ = new GenericQueue<string>();

stringQ.enqueue("hello");
console.log(stringQ.peak());
stringQ.dequeue();
stringQ.enqueue("TypeScript");
console.log(stringQ.size());
console.log(stringQ.peak());

console.log("----------------")
const numberQ = new GenericQueue<number>();

numberQ.enqueue(100)
console.log(numberQ.peak())
// numberQ.dequeue();
numberQ.enqueue(200);
console.log(numberQ.size());
console.log(numberQ.peak());
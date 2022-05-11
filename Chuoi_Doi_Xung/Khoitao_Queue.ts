export class Khoitao_Queue<T>{
    container_2: T[]=[];

    constructor() {
    }
    equeue(data:T) {
        this.container_2.push(data)
    }
    dequeue():T {
        return this.container_2.shift()
    }
}
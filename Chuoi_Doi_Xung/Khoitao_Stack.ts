export class Khoitao_Stack<T>{
    container_1: T[]=[];

    constructor() {
    }
    push(data:T) {
        this.container_1.push(data)
    }
    pop(){
        return this.container_1.pop()
    }
}
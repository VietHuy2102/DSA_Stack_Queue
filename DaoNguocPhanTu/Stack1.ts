export class Stack1<T>{
    container1: T[] = [];
    container2: T[] = [];

    constructor() {

    }
    push(...data:T[]):any{
        this.container1.push(...data);
    }
    pop():T{
        return this.container1.pop()
    }
    size():number{
        return this.container1.length;
    }
}
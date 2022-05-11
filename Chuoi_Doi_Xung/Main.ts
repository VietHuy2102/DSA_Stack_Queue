import {Khoitao_Stack} from "./Khoitao_Stack";
import {Khoitao_Queue} from "./Khoitao_Queue";

let stack = new Khoitao_Stack<string>();
let queue = new Khoitao_Queue<string>();

let str = `dfsdfsfsfsfsfghhgh`
for (let strElement of str) {
    stack.push(strElement)
}
for (let strElement of str) {
    queue.equeue(strElement)
}
console.log(stack.container_1)
console.log(queue.container_2)
let temp:boolean = true;
for (let i = 0; i < stack.container_1.length; i++) {
    if (stack.pop()!=queue.dequeue()){
        temp=false;
        break
    }
    else {
       temp =true;
    }
}
if (temp){
    console.log(`chuoi doi xung`);
}
else {
    console.log(`chuoi khong doi xung`);
}




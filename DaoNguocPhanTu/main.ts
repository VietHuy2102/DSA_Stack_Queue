import {Stack1} from "./Stack1";
let stack = new Stack1();
stack.push(1,2,3,4,5,6,7,8,9,10);
console.log(stack.container1)

for (let i = 0; i < 10; i++) {
    stack.container2.push(stack.container1.pop());

}
console.log(stack.container2);

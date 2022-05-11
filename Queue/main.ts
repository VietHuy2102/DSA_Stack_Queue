import {Queue} from "./Queue";

let queue = new Queue<string>();
queue.enqueue(`huy`);
queue.enqueue(`uyen`);
queue.enqueue(`suki`);
console.log(queue.container)
console.log(queue.dequeue())
console.log(queue.container)

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Khoitao_Stack_1 = require("./Khoitao_Stack");
var Khoitao_Queue_1 = require("./Khoitao_Queue");
var stack = new Khoitao_Stack_1.Khoitao_Stack();
var queue = new Khoitao_Queue_1.Khoitao_Queue();
var str = "dfsdfsfsfsfsfghhgh";
for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
    var strElement = str_1[_i];
    stack.push(strElement);
}
for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
    var strElement = str_2[_a];
    queue.equeue(strElement);
}
console.log(stack.container_1);
console.log(queue.container_2);
var temp = true;
for (var i = 0; i < stack.container_1.length; i++) {
    if (stack.pop() != queue.dequeue()) {
        temp = false;
        break;
    }
    else {
        temp = true;
    }
}
if (temp) {
    console.log("chuoi doi xung");
}
else {
    console.log("chuoi khong doi xung");
}

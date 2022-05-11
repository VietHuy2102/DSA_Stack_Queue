"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var stack = new Stack_1.Stack();
stack.push("huy");
stack.push("uyen");
stack.push("suki");
console.log(stack.container);
console.log(stack.pop());

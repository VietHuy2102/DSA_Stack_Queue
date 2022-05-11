"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Khoitao_Queue = void 0;
var Khoitao_Queue = /** @class */ (function () {
    function Khoitao_Queue() {
        this.container_2 = [];
    }
    Khoitao_Queue.prototype.equeue = function (data) {
        this.container_2.push(data);
    };
    Khoitao_Queue.prototype.dequeue = function () {
        return this.container_2.shift();
    };
    return Khoitao_Queue;
}());
exports.Khoitao_Queue = Khoitao_Queue;

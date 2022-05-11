"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Khoitao_Stack = void 0;
var Khoitao_Stack = /** @class */ (function () {
    function Khoitao_Stack() {
        this.container_1 = [];
    }
    Khoitao_Stack.prototype.push = function (data) {
        this.container_1.push(data);
    };
    Khoitao_Stack.prototype.pop = function () {
        return this.container_1.pop();
    };
    return Khoitao_Stack;
}());
exports.Khoitao_Stack = Khoitao_Stack;

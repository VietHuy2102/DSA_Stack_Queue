"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack1 = void 0;
var Stack1 = /** @class */ (function () {
    function Stack1() {
        this.container1 = [];
        this.container2 = [];
    }
    Stack1.prototype.push = function () {
        var _a;
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        (_a = this.container1).push.apply(_a, data);
    };
    Stack1.prototype.pop = function () {
        return this.container1.pop();
    };
    Stack1.prototype.size = function () {
        return this.container1.length;
    };
    return Stack1;
}());
exports.Stack1 = Stack1;

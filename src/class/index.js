"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        this.name = 'fxxk zxm';
        this.version = 0.1;
    }
}
exports.App = App;
class HomeComponent {
    constructor() {
        this.name = 'fxxk yk';
        this.version = 0.2;
    }
}
exports.HomeComponent = HomeComponent;
class Animal {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.Animal = Animal;
const zxm = new Animal('章', '向明');
console.log(JSON.stringify(zxm));
//Property 'firstName' is private and only accessible within class 'Animal'. (2341)
// console.log(zxm.firstName);
//相比于Animal在构造函数中手动进行赋值操作，Sb构造函数中的这种方式会自动赋值，可以查看编译后的文件
//它可能看上去不像是有属性的类，但它确实有，利用的是 TypeScript 提供的简写形式 —— 用构造函数的参数直接定义属性。
class Sb {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
exports.Sb = Sb;
const yk = new Sb('yin', 'kang');
console.log(JSON.stringify(yk));
//# sourceMappingURL=index.js.map
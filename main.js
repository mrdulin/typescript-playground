"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Human = (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
        Human.totalPeople += 1;
    }
    Human.prototype.talk = function () {
        return "Hi, I'm " + this.name;
    };
    return Human;
}());
Human.totalPeople = 0;
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, languages, age) {
        var _this = _super.call(this, name, age) || this;
        _this.languages = languages;
        return _this;
    }
    Developer.prototype.talk = function () {
        return _super.prototype.talk.call(this) + " And I know " + this.languages.join(',') + ".";
    };
    return Developer;
}(Human));
var dev = new Developer('novaline', ['JavaScript', 'Go'], 23);
//[ts] Property 'languages' is private and only accessible within class 'Developer'.
dev.languages = ['Java'];
var human = new Human('章向明', 40);
//[ts] Property 'age' is private and only accessible within class 'Human'.
human.age = 42;
//[ts] Property 'name' is protected and only accessible within class 'Human' and its subclasses.
human.name = "SB";
/**
 * Created by elsa on 2017/6/26.
 */
//范型类能够帮助我们避免重复代码
var GenericClass;
(function (GenericClass) {
    var User = (function () {
        function User() {
        }
        User.prototype.isValid = function () {
            // user validation
            return true;
        };
        return User;
    }());
    var Talk = (function () {
        function Talk() {
        }
        Talk.prototype.isValid = function () {
            //talk validation
            return true;
        };
        return Talk;
    }());
    var GenericRepository = (function () {
        function GenericRepository(url) {
            this._url = url;
        }
        GenericRepository.prototype.getAsync = function () {
            var dfd = $.Deferred();
            $.ajax({
                url: this._url,
                type: 'GET',
                dataType: 'json'
            }).then(function (data) {
                // const list: T[] = data.items;
                // dfd.resolve(list);
                //添加数据验证逻辑
                // const dataList: T[] = [];
                // const items: T[] = data.items;
                // for(let item of items) {
                //
                //下面这种方式的缺点：
                //每增加一个实例，都要修改GenericRepository类，增加额外的逻辑，范型类不应该知道范型的类型
                //   if(item instanceof User) {
                //     //validate user
                //   }
                //   if(item instanceof Talk) {
                //     //validate Talk
                //   }
                // }
                //一个更好的解决方案是给获取的实例增加一个isValid方法
                //遵循了SOLID原则中得开/闭原则，可以在GenericRepository类正常工作的情况下增加一个新的实例（对扩展开放），
                //但是不需要额外的修改代码（对已有的修改封闭）。
                //还有一点需要注意，并不是所有类型都有isValid方法，所以需要进行范型约束，对类型进行约束。
                var list = [];
                var items = data.items;
                for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
                    var item = items_1[_a];
                    if (item.isValid()) {
                        list.push(item);
                    }
                }
                dfd.resolve(list);
            }).catch(function (jqXHR, textStatus, error) {
                dfd.reject(error);
            });
            return dfd.promise();
        };
        return GenericRepository;
    }());
    var userRepository = new GenericRepository('./users.json');
    userRepository.getAsync().then(function (users) {
        console.log(users);
    }).catch(function (e) {
        console.error(e);
    });
    var talkRepository = new GenericRepository('./talks.json');
    talkRepository.getAsync().then(function (talks) {
        console.log(talks);
    }).catch(function (e) {
        console.error(e);
    });
    //下面的不符合范型约束，编译时期会报错
    // error TS2339: Property 'isValid' does not exist on type 'T'.
    // new GenericRepository<number>('./sdsd');
})(GenericClass || (GenericClass = {}));
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log("f(): called");
    };
}
function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey, descriptor) {
        console.log('g(): called');
    };
}
/**
 * 在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：

  1.由上至下依次对装饰器表达式求值。
  2.求值的结果会被当作函数，由下至上依次调用。

 * @return {[type]} [description]
 */
var C = (function () {
    function C() {
    }
    C.prototype.method = function () { };
    return C;
}());
__decorate([
    f(),
    g()
], C.prototype, "method", null);
var Person = (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "kidCount", {
        get: function () {
            return 42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return 23;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
__decorate([
    nonenumerable
], Person.prototype, "kidCount", null);
/**
 * @desc 装饰器 - 将被装饰的属性设置为不可枚举
 * @param target: Person类
 * @param name: 被装饰的目标属性的名称
 * @param descriptor: 目标属性的描述符
 */
function nonenumerable(target, name, descriptor) {
    //kidCount属性不可枚举
    descriptor.enumerable = false;
    console.log('name: ', name);
    return descriptor;
}
var person = new Person();
for (var prop in person) {
    console.log(prop);
}
var fetchData = function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(2222);
        }, 200);
    });
};
function fn() {
    return __awaiter(this, void 0, void 0, function () {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchData()];
                case 1:
                    i = _a.sent();
                    return [2 /*return*/, 1 + i];
            }
        });
    });
}
fn().then(function (num) { return console.log(num); });
/**
 * Created by dulin on 2017/6/27.
 */
var defaultArgs;
(function (defaultArgs) {
    var MemberEntity = (function () {
        function MemberEntity(id, login, avatar_url) {
            if (id === void 0) { id = -1; }
            if (login === void 0) { login = ''; }
            if (avatar_url === void 0) { avatar_url = ''; }
            this.id = id;
            this.login = login;
            this.avatar_url = avatar_url;
        }
        return MemberEntity;
    }());
    var MemberState = (function () {
        function MemberState(member) {
            this.member = member;
            this.memberId = -1;
            this.saveCompleted = false;
        }
        return MemberState;
    }());
    var member = new MemberEntity();
    //这里到底用Action<{}>还是Action<any>?
    function memberReducer(state, action) {
        if (state === void 0) { state = new MemberState(member); }
        var newState;
        switch (action.type) {
            case 'MEMBER_SAVE':
                console.log('action:', JSON.stringify(action, null, 2));
                newState = Object.assign({}, state, { saveCompleted: true });
                return newState;
            default:
                return state;
        }
    }
    var action = {
        type: 'MEMBER_SAVE',
        payload: {}
    };
    var state = memberReducer(undefined, action);
    console.log('state: ', state);
})(defaultArgs || (defaultArgs = {}));
//参考：
//https://github.com/reactjs/redux/issues/992
var add_v1 = function (x, y) { return x + y; };
//定义函数类型，包括接收的参数类型和返回值类型
var add_v2;
//赋值函数
add_v2 = function (x, y) { return x + y; };
var add_v3 = function (x, y) { return x + y; };
var result = [
    add_v1(1, 2),
    add_v2(1, 2),
    add_v3(1, 2)
];
for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
    var r = result_1[_a];
    console.log(r);
}
function foo() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, 1];
            case 1:
                _a.sent();
                return [4 /*yield*/, 2];
            case 2:
                _a.sent();
                return [4 /*yield*/, 3];
            case 3:
                _a.sent();
                return [4 /*yield*/, 4];
            case 4:
                _a.sent();
                return [2 /*return*/, 5];
        }
    });
}
var bar = foo();
var resultList = [
    bar.next(),
    bar.next(),
    bar.next(),
    bar.next(),
    bar.next(),
    bar.next()
];
for (var _a = 0, resultList_1 = resultList; _a < resultList_1.length; _a++) {
    var result_2 = resultList_1[_a];
    console.log(result_2);
}
var User = (function () {
    function User() {
    }
    return User;
}());
var Order = (function () {
    function Order() {
    }
    return Order;
}());
function getUsers(cb) {
    setTimeout(function (_) {
        var users = [
            { name: 'novaline', age: 232 },
            { name: 'melon kid', age: 23 },
        ];
        cb(users);
    }, 1000);
}
getUsers(function (users) {
    for (var _a = 0, users_1 = users; _a < users_1.length; _a++) {
        var user_1 = users_1[_a];
        console.log(user_1.name);
    }
});
function getOrders(cb) {
    setTimeout(function () {
        var orders = [
            { id: 1, total: 233, items: [2, 2, 2] },
            { id: 2, total: 23.3, items: [1, 1, 1] }
        ];
        cb(orders);
    }, 1000);
}
getOrders(function (orders) {
    for (var _a = 0, orders_1 = orders; _a < orders_1.length; _a++) {
        var order = orders_1[_a];
        console.log(order.total);
    }
});
/**
 * 使用泛型来解决这种类型的代码重复
 */
function getEntities(url, cb) {
    setTimeout(function () {
        var datas;
        if (url === 'users') {
            datas = [
                { name: 'novaline', age: 232 },
                { name: 'melon kid', age: 23 },
            ];
        }
        else {
            datas = [
                { id: 1, total: 233, items: [2, 2, 2] },
                { id: 2, total: 23.3, items: [1, 1, 1] }
            ];
        }
        cb(datas);
    }, 1000);
}
getEntities('users', function (users) {
    for (var _a = 0, users_2 = users; _a < users_2.length; _a++) {
        var user_2 = users_2[_a];
        console.log(user_2.name);
    }
});
getEntities('orders', function (orders) {
    for (var _a = 0, orders_2 = orders; _a < orders_2.length; _a++) {
        var order = orders_2[_a];
        console.log(order.total);
    }
});
function sume(a, b, callback) {
    callback(a + b);
}
sume(1, 2, function (result) {
    console.log(result);
});
function add() {
    var args = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        args[_a] = arguments[_a];
    }
    var result = 0;
    for (var _b = 0, args_1 = args; _b < args_1.length; _b++) {
        var arg = args_1[_b];
        result += arg;
    }
    return result;
}
var results = [
    add(),
    add(2),
    add(2, 2),
    add(2, 2, 2),
    add(2, 2, 2, 2),
    add(2, 2, 2, 2, 2)
];
for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
    var result_3 = results_1[_a];
    console.log(result_3);
}
// 函数参数解构并类型注解
// 下面pretty的类型注解方式，错误的方式
// function toJSON(value: any, {pretty: boolean}) {
//   const indent: number = pretty ? 4 : 0;
//   return JSON.stringify(value, null, indent);
// }
function toJSON(value, _a) {
    var pretty = _a.pretty;
    var indent = pretty ? 4 : 0;
    return JSON.stringify(value, null, indent);
}
//toJSON_v1的第二个参数中pretty字段是可选的, 第二个参数必须存在，如果pretty字段不存在，则pretty被设置为默认值true
function toJSON_v1(value, _a) {
    var _b = _a.pretty, pretty = _b === void 0 ? true : _b;
    var indent = pretty ? 4 : 0;
    return JSON.stringify(value, null, indent);
}
//toJSON_v2的第二个参数是可选的，第二个参数如果不存在，则第二个参数被设置为默认值{}, 该默认值{}解构赋值, 又因为pretty字段不存在，所以pretty被设置为默认值true
function toJSON_v2(value, _a) {
    var _b = (_a === void 0 ? {} : _a).pretty, pretty = _b === void 0 ? true : _b;
    var indent = pretty ? 4 : 0;
    return JSON.stringify(value, null, indent);
}
var her = { name: 'emilie', age: 26 };
console.log(toJSON(her, { pretty: true }));
console.log('------ toJSON_v1 start ------');
console.log(toJSON_v1(her, {}));
// 注意：是toJSON_v1的第二个参数对象中pretty字段是可选的，并不是第二个参数是可选的
// console.log(toJSON_v1(her));
console.log('------ toJSON_v1 end ------');
console.log('------ toJSON_v2 start ------');
console.log(toJSON_v2(her));
console.log(toJSON_v2(her, {}));
console.log(toJSON_v2(her, { pretty: false }));
console.log('------ toJSON_v2 end ------');
function toJSON_v4(value, _a) {
    var _b = (_a === void 0 ? {} : _a).pretty, pretty = _b === void 0 ? true : _b;
    var indent = pretty ? 4 : 0;
    return JSON.stringify(value, null, indent);
}
console.log('------ toJSON_v4 start ------');
console.log(toJSON_v4(her));
console.log(toJSON_v4(her, {}));
console.log(toJSON_v4(her, { pretty: false }));
console.log('------ toJSON_v4 end ------');
function fn_v1(opt) {
    console.log(opt.name);
}
fn_v1({ name: 'emilie' });
//泛型类
//类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
var GenericNumber = (function () {
    function GenericNumber() {
        this.emit = function (val) {
            console.log(val);
        };
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 9;
myGenericNumber.add = function (x, y) {
    return x + y;
};
myGenericNumber.emit(222);
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 1));
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = '1';
stringNumeric.add = function (x, y) {
    return +x + +y + '';
};
console.log(stringNumeric.add(stringNumeric.zeroValue, '9'));
/**
 * Created by elsa on 2017/6/26.
 */
// -- 在范型约束中使用多重类型 --
var ConstraintsMultiple;
(function (ConstraintsMultiple) {
    var Example = (function () {
        function Example(entity) {
            this.genericProp = entity;
        }
        Example.prototype.useT = function () {
            this.genericProp.doSomething();
            this.genericProp.doSomethingElse();
        };
        return Example;
    }());
    var User = (function () {
        function User() {
        }
        User.prototype.doSomething = function () {
            console.log('doSomething');
        };
        User.prototype.doSomethingElse = function () {
            console.log('doSomethingElse');
        };
        return User;
    }());
    var me = new User();
    new Example(me).useT();
    //下面的类型不符合Example类的范型约束
    // new Example<number>(1);
})(ConstraintsMultiple || (ConstraintsMultiple = {}));
/**
 * Created by dulin on 2017/6/23.
 */
// --- 泛型约束 ---
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var aValue = getProperty(x, 'a');
console.log(aValue);
//Error:(13, 28) TS2345:Argument of type '"x"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// console.log(getProperty(x, 'x'));
/**
 * Created by dulin on 2017/6/20.
 */
//要兼容多种数据类型，可以使用any，但是any并不能保证传入的值和返回的值是同一种数据类型
// function identify(arg: any): any {
//   return arg.toString();
// }
//
// console.log(identify(222));
/**
 * 要解决这个问题，我们需要引入类型变量-一种特殊的变量，只用于表示类型不表示值
 * 给identify添加了类型变量T，用来捕获传入值的类型，然后将返回值的类型也设置为T,就实现了传入值和返回值为同一类型值的需求
 * 我们把identify这个函数叫做泛型，因为它适用于所有类型，并且不会有any类型存在的问题
 * @param arg
 * @returns {T}
 */
function identify(arg) {
    return arg;
}
//使用泛型的方法有两种：
//1、传入所有的参数，包括类型参数
var output = identify('sdfsdf');
//2、利用类型推论--即编译器会根据传入的参数自动地帮助我们确定T的类型
var output2 = identify('sdf');
// --- 泛型变量 ---
//在泛型中，我们要合理正确的使用泛型变量T，要牢记T表示任何类型
//错误使用：
function identify_v2(arg) {
    console.log(arg.length); //报错
    return arg;
}
//在泛型中我们使用了length这个属性，但是T代表任何类型，所以有可能是number，而number是没有length属性的，所以会报错
//如果想要使用length这个属性，我们可以创建数组
function identify_v3(arg) {
    console.log(arg.length);
    return arg;
}
// --- 泛型类型 --- 
//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
function indentify_v4(arg) {
    return arg;
}
var myIndentify = indentify_v4;
function indentify_v5(arg) {
    return arg;
}
var myGenericIndentify = indentify_v5;
function indentify_v6(arg) {
    console.log(arg.length);
    return arg;
}
indentify_v6(123); //报错
indentify_v6('sdf');
/**
 * Created by dulin on 2017/6/27.
 */
var Greeting = (function (_super) {
    __extends(Greeting, _super);
    function Greeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Greeting.prototype.render = function () {
        return 'This is a fake React component';
    };
    return Greeting;
}(React.Component));
var greeting = new Greeting();
console.log(greeting.render());
var Firm = (function () {
    function Firm() {
    }
    Firm.prototype.getIncome = function () {
        return 2222;
    };
    return Firm;
}());
var Individual = (function () {
    function Individual() {
    }
    Individual.prototype.getIncome = function () {
        return 3333;
    };
    return Individual;
}());
/**
 * [ts]
  Class 'FxxkZxm' incorrectly implements interface 'Accountable'.
  Property 'getIncome' is missing in type 'FxxkZxm'.
 */
var FxxkZxm = (function () {
    function FxxkZxm() {
    }
    return FxxkZxm;
}());
var Clock = (function () {
    function Clock(h, m) {
        this.h = h;
        this.m = m;
    }
    return Clock;
}());
//这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 
//constructor存在于类的静态部分，所以不在检查的范围内。
/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
 * @param src
 * @param sub
 * @returns {boolean}
 */
var mySearchFn = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
console.log(mySearchFn('novaline', 'l ine'));
var obj = {
    next: function (name) {
        return name;
    }
};
console.log(obj.next('novaline'));
function createSquare(config) {
    var area = config.width ? Math.pow(config.width, 2) : 0;
    return {
        color: config.color || 'red',
        area: area
    };
}
console.log(createSquare({ colour: "red", width: 100, extraData1: 'emilie', extraData2: 'I like her' }));
var arr = ['novaline', 'emily'];
var str = arr[0];
var arr1 = ['emilie', 'ouba'];
// arr1[2] = 'react';
//实现多个接口，如果类的行为是很多接口中定义的行为的并集，那么类可以实现所有这些接口：
var MyFxxkClass = (function () {
    function MyFxxkClass() {
    }
    MyFxxkClass.prototype.getIncome = function () {
        return 2222;
    };
    return MyFxxkClass;
}());
var me = new MyFxxkClass();
console.log(me.getIncome());
/**
 * Created by dulin on 2017/6/20.
 */
var Component = (function () {
    function Component(name) {
        this.name = name;
    }
    return Component;
}());
var Frame = (function () {
    function Frame(name, components) {
        this.name = name;
        this.components = components;
        this.pointer = 0;
    }
    Frame.prototype.next = function () {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            };
        }
        else {
            return {
                done: true,
                value: {}
            };
        }
    };
    return Frame;
}());
var frame = new Frame('door', [new Component('left'), new Component('right'), new Component('top'), new Component('bottom')]);
for (var i = 0; i < 5; i++) {
    console.log(frame.next());
}
var Geometry;
(function (Geometry) {
    var Vector2d = (function () {
        function Vector2d(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector2d.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        Vector2d.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        };
        Vector2d.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        return Vector2d;
    }());
    Geometry.Vector2d = Vector2d;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector2d(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log('x : ' + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
});
define(["require", "exports", "./mod"], function (require, exports, m) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.t = m.getNumber() + 1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFDVyxRQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gPSByZXF1aXJlKCcuL21vZCcpO1xuZXhwb3J0IGxldCB0ID0gbS5nZXROdW1iZXIoKSArIDE7XG4iXX0= 
define(["require", "exports"], function (require, exports) {
    "use strict";
    var obj = {
        getNumber: function () {
            return 222;
        }
    };
    return obj;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsTUFBTSxHQUFHLEdBQUc7UUFDVixTQUFTO1lBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUM7S0FDRixDQUFDO0lBRUYsT0FBUyxHQUFHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBvYmogPSB7XG4gIGdldE51bWJlcigpOiBudW1iZXJ7XG4gICAgcmV0dXJuIDIyMjtcbiAgfVxufTtcblxuZXhwb3J0ID0gb2JqO1xuIl19 
var obj = {
    getNumber: function () {
        return 222;
    }
};
module.exports = obj;
Object.defineProperty(exports, "__esModule", { value: true });
var m = require("./mod");
exports.t = m.getNumber() + 1;
var obj = {
    getNumber: function () {
        return 222;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sR0FBRyxHQUFHO0lBQ1YsU0FBUztRQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9iaiA9IHtcbiAgZ2V0TnVtYmVyKCk6IG51bWJlcntcbiAgICByZXR1cm4gMjIyO1xuICB9XG59O1xuXG5leHBvcnQgPSBvYmo7XG4iXX0= 
System.register(["./mod"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var m, t;
    return {
        setters: [
            function (m_1) {
                m = m_1;
            }
        ],
        execute: function () {
            exports_1("t", t = m.getNumber() + 1);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUNBLGVBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEVBQUM7UUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtID0gcmVxdWlyZSgnLi9tb2QnKTtcbmV4cG9ydCBsZXQgdCA9IG0uZ2V0TnVtYmVyKCkgKyAxO1xuIl19 
System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var obj;
    return {
        setters: [],
        execute: function () {
            obj = {
                getNumber: function () {
                    return 222;
                }
            };
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBTSxHQUFHLEdBQUc7Z0JBQ1YsU0FBUztvQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNiLENBQUM7YUFDRixDQUFDO1FBR0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9iaiA9IHtcbiAgZ2V0TnVtYmVyKCk6IG51bWJlcntcbiAgICByZXR1cm4gMjIyO1xuICB9XG59O1xuXG5leHBvcnQgPSBvYmo7XG4iXX0= 
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined)
            module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var obj = {
        getNumber: function () {
            return 222;
        }
    };
    return obj;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBQSxNQUFNLEdBQUcsR0FBRztRQUNWLFNBQVM7WUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQztLQUNGLENBQUM7SUFFRixPQUFTLEdBQUcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG9iaiA9IHtcbiAgZ2V0TnVtYmVyKCk6IG51bWJlcntcbiAgICByZXR1cm4gMjIyO1xuICB9XG59O1xuXG5leHBvcnQgPSBvYmo7XG4iXX0= 
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined)
            module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./mod"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var m = require("./mod");
    exports.t = m.getNumber() + 1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBLDJCQUE0QjtJQUNqQixRQUFBLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG0gPSByZXF1aXJlKCcuL21vZCcpO1xuZXhwb3J0IGxldCB0ID0gbS5nZXROdW1iZXIoKSArIDE7XG4iXX0= 
/**
 * Created by elsa on 2017/6/26.
 */
var app;
(function (app) {
    var validation;
    (function (validation) {
        var UserValidation = (function () {
            function UserValidation() {
            }
            return UserValidation;
        }());
        validation.UserValidation = UserValidation;
        var TalkValidation = (function () {
            function TalkValidation() {
            }
            return TalkValidation;
        }());
        validation.TalkValidation = TalkValidation;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
/**
 * Created by elsa on 2017/6/26.
 */
// namespace app{
//   export namespace models{
//     export class UserModel{
//      
//     }
//    
//     export class TalkModel{
//      
//     }
//   }
// }
//命名空间可以包含点号。结果和上面一样
var app;
(function (app) {
    var models;
    (function (models) {
        var UserModel = (function () {
            function UserModel() {
            }
            return UserModel;
        }());
        models.UserModel = UserModel;
        var TalkModel = (function () {
            function TalkModel() {
            }
            return TalkModel;
        }());
        models.TalkModel = TalkModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
/**
 * Created by elsa on 2017/6/26.
 */
///<reference path="./validation.ts"/>
///<reference path="./model.ts"/>
//即使命名空间models和validation在两个不同的文件中，也可以在第三个文件中同时访问它们。
var user = new app.models.UserModel();
var talk = new app.models.TalkModel();
var userValidator = new app.validation.UserValidation();
//除了以下这种方式
// const talkValidator = new app.validation.TalkValidation();
//可以使用import关键字在内部模块中为另一个模块提供别名
var TalkValidatorAlias = app.validation.TalkValidation;
var talkValidator = new TalkValidatorAlias();
/**
 * Created by dulin on 2017/6/23.
 */
/// <reference path='Validation.ts'/>
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/**
 * Created by dulin on 2017/6/23.
 */
/// <reference path='Validation.ts'/>
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
/**
 * Created by dulin on 2017/6/23.
 */
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/**
 * Created by dulin on 2017/6/23.
 */
// 如果没有下面的引用，编译时会报错：error TS2503: Cannot find namespace 'Validation'.
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("" + s + "" + (validators[name_1].isAcceptable(s) ? " matches " : " does not match ") + name_1);
    }
}
/**
 * Created by dulin on 2017/6/23.
 */
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
/**
 * Created by dulin on 2017/6/23.
 */
// 如果没有下面的引用，编译时会报错：error TS2503: Cannot find namespace 'Validation'.
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _a = 0, strings_2 = strings; _a < strings_2.length; _a++) {
    var s_1 = strings_2[_a];
    for (var name in validators) {
        console.log("" + s_1 + "" + (validators[name].isAcceptable(s_1) ? " matches " : " does not match ") + name);
    }
}
/**
 * Created by dulin on 2017/6/29.
 */
var isPrime = function (x) {
    return true;
};
/// <reference path="./mathLib.ts"/>
console.log(mathLib.isPrime(2));
/**
 * Created by dulin on 2017/6/27.
 */
// -- 对象字面量类型 --
//https://stackoverflow.com/questions/12787781/type-definition-in-object-literal-in-typescript
var objectLiteralType;
(function (objectLiteralType) {
    //可以使用对象字面量定义类型
    var obj = { property: 'foo' };
    console.log(obj);
    var obj2 = { property: 'xxxx' };
    console.log(obj2);
    var Component = (function () {
        function Component() {
            this.props = {
                name: 'novaline',
                age: 23
            };
        }
        return Component;
    }());
    console.log(new Component().props);
})(objectLiteralType || (objectLiteralType = {}));
/**
 * Created by dulin on 2017/6/27.
 */
//https://stackoverflow.com/questions/18961203/typescript-any-vs-object
var objectVsAny;
(function (objectVsAny) {
    var fn = function (a) {
        a.b.method();
    };
    var fn2 = function (a) {
        a.b.method();
    };
    var arg = {
        b: {}
    };
    var arg2 = {
        b: {}
    };
    fn(arg);
    fn2(arg2);
})(objectVsAny || (objectVsAny = {}));
/**
 * Created by dulin on 2017/6/21.
 */
// --- 字符串字面量类型 ---
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
var MyComponent = (function () {
    function MyComponent(props) {
        console.log(props);
    }
    return MyComponent;
}());
var comp = new MyComponent({ name: 'novaline' });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
var heroes = [];
//传统的构造对象的方式
var hero = new Hero();
hero.name = 'novaline';
hero.state = 'active';
heroes.push(hero);
//代码行数较多，没那么优雅
//下面介绍三种简洁的方式，tslint都会对对象的字段进行类型检查
var hero1 = {
    name: 'emily',
    state: 'active'
};
//类型断言是在编译时期的静态转型，而不是运行时期的动态转型
//编译出来的js代码中，并没有Hero类型，只是Object类型，所以并没有所谓的运行时期的动态转型
//类型断言实际上只有两个功能：1.编译时期的类型检查 2.开发时期的intellisense
//下面这两种写法，就算少了state字段，tslint也不会给出提示，并且使用tsc编译时也不会报错，只有第一种类型声明的形式，当少些字段时，tslint才会给出提示，并且编译时会报错
var hero2 = {
    name: 'emilie',
    state: 'active'
};
var hero3 = {
    name: 'novaline',
    state: 'active'
};
/**
 * Created by dulin on 2017/6/27.
 */
var typingDestructuredObjectLiteralAndArray;
(function (typingDestructuredObjectLiteralAndArray) {
    var action = {
        type: 'SEARCH/QUERY_BOOK',
        payload: {
            total: 100,
            books: ['react', 'angular', 'typescript']
        },
        error: false,
        meta: {
            query: 'react',
            page: 1
        }
    };
    // -- 对象字面量结构赋值 --
    var _a = action.payload, total = _a.total, books = _a.books;
    console.log(total, books);
    // -- 数组结构赋值 - 1 --
    var _b = action.payload.books, firstBook = _b[0], secondBook = _b[1], lastBook = _b[2];
    console.log(firstBook, secondBook, lastBook);
    // -- 数组结构赋值 - 2 --
    var names = ['react', 'angular', 'typescript'];
    var q = names[0], w = names[1], e = names[2];
    console.log(q, w, e);
    // -- 数组结构赋值 - 3 --
    var _c = [1, 1], a = _c[0], b = _c[1];
    console.log(a, b);
    // -- 下面这两种方式都不行 --
    // 因为books被类型推断成了Array<string>类型
    // const [firstBook, secondBook, lastBook]: [string, string, string] = action.payload.books;
    // const [firstBook, ...rest]: [string, string[]] = action.payload.books;
})(typingDestructuredObjectLiteralAndArray || (typingDestructuredObjectLiteralAndArray = {}));
/**
 * Created by dulin on 2017/6/20.
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
padLeft("Hello world", 4); // returns "    Hello world"
var indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错
// --- 联合类型 --- 
function padLeftV2(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var indentedString_v2 = padLeftV2("Hello world", true); // 编译阶段报错
function getSmallPet() {
    return {
        swim: function () { },
        fly: function () { },
        layEggs: function () { }
    };
}
var pet = getSmallPet();
pet.swim();
pet.fly();
pet.layEggs();
// --- 类型断言 ---
//可以让上面的代码正常工作
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
//这里可以注意到我们不得不多次使用类型断言。 假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet的类型的话就好了。
//TypeScript里的类型保护机制让它成为了现实。 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 
//要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：
function isFish(pet) {
    return pet.swim !== undefined;
}
//在这个例子里，pet is Fish就是类型谓词。 谓词为 parameterName is Type这种形式，parameterName必须是来自于当前函数签名里的一个参数名。
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
//注意TypeScript不仅知道在if分支里pet是Fish类型； 它还清楚在 else分支里，一定不是Fish类型，一定是Bird类型。
//# sourceMappingURL=main.js.map
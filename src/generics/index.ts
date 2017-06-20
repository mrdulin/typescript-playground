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
function identify<T>(arg: T): T{
  return arg;
} 

//使用泛型的方法有两种：
//1、传入所有的参数，包括类型参数
let output = identify<string>('sdfsdf');
//2、利用类型推论--即编译器会根据传入的参数自动地帮助我们确定T的类型
let output2 = identify('sdf');

// --- 泛型变量 ---

//在泛型中，我们要合理正确的使用泛型变量T，要牢记T表示任何类型
//错误使用：
function identify_v2<T>(arg: T): T{
  console.log(arg.length); //报错
  return arg;
}
//在泛型中我们使用了length这个属性，但是T代表任何类型，所以有可能是number，而number是没有length属性的，所以会报错

//如果想要使用length这个属性，我们可以创建数组
function identify_v3<T>(arg: T[]): T[]{
  console.log(arg.length);
  return arg;
}


// --- 泛型类型 --- 

//泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样：
function indentify_v4<T>(arg: T): T {
  return arg;
}

let myIndentify: <U>(arg: U) => U = indentify_v4;
//从上面的代码中可以看出也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就可以

interface GenericIndentify<T> {
  (arg: T): T
}

function indentify_v5<T>(arg: T): T {
  return arg;
}

let myGenericIndentify: GenericIndentify<string> = indentify_v5;

// --- 泛型约束 ---

//在前面的泛型变量中遇到了一个问题，就是在泛型中调用参数的length时，如果参数没有Length属性会报错，而使用泛型约束，就是只有满足一定的条件才可以使用这个泛型
//为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字还实现约束：

interface lengthwise{
  length: number
}

function indentify_v6<T extends lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

indentify_v6<number>(123); //报错
indentify_v6<string>('sdf');

//泛型类
//类有两部分：静态部分和实例部分。 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

class GenericNumber<T>{
  public zeroValue: T;

  //add 方法类型定义, 类型包括参数类型和返回值类型
  public add: (x: T, y: T) => T;

  public emit: (val: T) => void = (val: T) => {
    console.log(val);
  };

}

const myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 9;
myGenericNumber.add = function(x: number, y: number): number {
  return x + y;
};

myGenericNumber.emit(222);
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 1));


const stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = '1';
stringNumeric.add = function(x: string, y: string): string {
  return +x + +y + '';
}

console.log(stringNumeric.add(stringNumeric.zeroValue, '9'));



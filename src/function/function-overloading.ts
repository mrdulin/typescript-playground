/**
 * Created by dulin on 2017/7/3.
 */
namespace functionOverloading {
  //函数签名重载
  
  //所有的被重载的函数签名必须是兼容的，如果有一个函数签名返回值类型是number,另一个是string，则编译报错
  function test(name: string): string;
  function test(age: number): string;
  function test(single: boolean): string;
  
  //下面的会报错
  // function test(job: string): number;

  //函数签名的实现必须兼容所有的被重载的函数签名，并且函数签名实现必须位于所有被重载函数签名的最后，接收any或者联合类型作为它的参数类型。
  function test(value: (string | number | boolean)): string | void {
    switch (typeof value) {
      case "string":

        return `My name is ${value}.`;
      case "number":

        return `I'm ${value} years old.`;
      case "boolean":

        return value ? "I'm single." : "I'm not single.";
      default:

        console.log("Invalid Operation!");

    }
  }

  test("Remo"); // returns "My name is Remo."
  test(26); // returns "I'm 26 years old.";
  test(false); // returns "I'm not single.";
  // test({ custom : "custom" }); // error
  
  
  // -- class构造函数重载 --
  
  interface IComplexType {
    id: number;
    name: string;
  }
  
  class ComplexType implements IComplexType {
    public id: number;
    public name: string;
    
    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any) {
      this.id = idArg;
      this.name = nameArg;
    }
    
  }
}


// -- 对象字面量类型 --
// https://stackoverflow.com/questions/12787781/type-definition-in-object-literal-in-typescript

namespace objectLiteralType {
  // 可以使用对象字面量定义类型
  const obj: { property: string } = { property: 'foo' };
  console.log(obj);

  // 或者使用interface
  interface IMyObj {
    property: string;
  }

  const obj2: IMyObj = { property: 'xxxx' };
  console.log(obj2);

  class Component {
    public props: {
      name: string;
      age: number;
    } = {
      name: 'novaline',
      age: 23
    };
  }

  console.log(new Component().props);
}

// 函数签名重载

// 所有的被重载的函数签名必须是兼容的，如果有一个函数签名返回值类型是number,另一个是string，则编译报错
function overloading(id: string | number | boolean, option?: object): string;

// 函数签名的实现必须兼容所有的被重载的函数签名，并且函数签名实现必须位于所有被重载函数签名的最后，接收any或者联合类型作为它的参数类型。
function overloading(value: string | number | boolean): string | void {
  switch (typeof value) {
    case 'string':
      return `My name is ${value}.`;
    case 'number':
      return `I'm ${value} years old.`;
    case 'boolean':
      return value ? "I'm single." : "I'm not single.";
    default:
      console.log('Invalid Operation!');
  }
}

export { overloading };

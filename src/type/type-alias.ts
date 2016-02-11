namespace typeAlias {
  // 当使用联合类型时，如果联合的类型比较多，那么很难记住到底哪些类型是被允许的，这时候可以使用类型别名

  type StringOrNumber = string | number;

  function addWithAlias(arg1: StringOrNumber, arg2: StringOrNumber) {
    return arg1.toString() + arg2.toString();
  }

  // 类型别名也可以用来定义函数签名

  type callbackWithString = (str: string) => void;

  function usingCallbackWithString(callback: callbackWithString): void {
    callback('this is a string');
  }
}

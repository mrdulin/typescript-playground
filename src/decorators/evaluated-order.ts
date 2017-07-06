namespace evaluatedOrder {
  type DecoratorFunction<T> = (t: any, key: string, d: T) => T;

  function f(): DecoratorFunction<PropertyDescriptor> {
    console.log('f(): evaluated');

    return function (target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
      console.log('f(): called');
      return descriptor;
    };
  }

  function g(): DecoratorFunction<PropertyDescriptor> {
    console.log('g(): evaluated');

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
      console.log('g(): called');
      return descriptor;
    };
  }

  /**
   * 在TypeScript里，当多个装饰器应用在一个声明上时会进行如下步骤的操作：
   * 1.由上至下依次对装饰器表达式求值。
   * 2.求值的结果会被当作函数，由下至上依次调用。
   * @return {[type]} [description]
   */
  class C {
    @f()
    @g()
    public method(): void {
    }
  }
}


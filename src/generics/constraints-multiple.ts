/**
 * Created by elsa on 2017/6/26.
 */
// -- 在范型约束中使用多重类型 --

namespace ConstraintsMultiple {
  interface IProps {
    doSomething(): void;
  }

  interface IState {
    doSomethingElse(): void;
  }

  // 可能会想到像下面这样定义范型约束：
  // 编译报错，不能在定义范型约束的时候指定多个类型
  //   class Example<T extends IProps, IState>{
  //     public genericProp: T;
  //     useT() {
  //       this.genericProp.doSomething();
  //       this.genericProp.doSomethingElse();
  //     }
  //   }

  // 解决办法：
  interface IChild extends IProps, IState {}

  class Example<T extends IChild> {
    public genericProp: T;

    constructor(entity: T) {
      this.genericProp = entity;
    }
    public useT(): void {
      this.genericProp.doSomething();
      this.genericProp.doSomethingElse();
    }
  }

  class User implements IChild {
    public doSomething(): void {
      console.log('doSomething');
    }

    public doSomethingElse(): void {
      console.log('doSomethingElse');
    }
  }

  const me: User = new User();

  new Example<User>(me).useT();

  // 下面的类型不符合Example类的范型约束
  // new Example<number>(1);
}

interface IAccountableV2 {
  // ts的接口也支持定义属性，可以在实现了该接口的类里面把accountNumber定义成一个字段或者一个getter
  accountNumber: string;
  getIncome(): number;
}

// [ts] All declarations of 'name' must have identical modifiers
interface IAnimal {
  name: string;
  age: number;
}

// 接口支持多继承
interface Individual extends IAccountableV2, IAnimal {
  ssn: string;
}

// 实现多个接口，如果类的行为是很多接口中定义的行为的并集，那么类可以实现所有这些接口：
class MyFxxkClass implements Individual {
  public age: number = 0;
  public name: string = '';
  public accountNumber: string = '';
  public ssn: string = '';
  public getIncome(): number {
    return 2222;
  }
}

const me = new MyFxxkClass();

console.log(me.getIncome());

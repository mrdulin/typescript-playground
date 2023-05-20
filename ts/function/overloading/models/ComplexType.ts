import { IComplexType } from '../@types';

// class构造函数重载
class ComplexType implements IComplexType {
  public id: number;
  public name: string;

  constructor(idArg: number | string, nameArg: string);
  constructor(idArg: any, nameArg: any) {
    this.id = idArg;
    this.name = nameArg;
  }
}

export { ComplexType };

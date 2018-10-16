import { IValidatable } from './@types';

class User implements IValidatable {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  public isValid(): boolean {
    return true;
  }
}

export { User };

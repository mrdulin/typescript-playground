import { nonenumerable } from '../decorators';

class Person {
  @nonenumerable
  public getKidCount(): number {
    return 42;
  }

  public getAge(): number {
    return 23;
  }
}

export { Person };

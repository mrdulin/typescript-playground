import { IPrint } from '../@types';

export class ClassB implements IPrint {
  public print(): void {
    console.log('ClassB.print()');
  }
}

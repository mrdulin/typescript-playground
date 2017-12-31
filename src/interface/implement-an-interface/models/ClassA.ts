import { IPrint } from '../@types';

export class ClassA implements IPrint {
  public print(): void {
    console.log('ClassA.print()');
  }
}

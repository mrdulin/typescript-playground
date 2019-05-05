import { IPrintable } from '../@types';

export class ClassA implements IPrintable {
  public print(): void {
    console.log('ClassA.print()');
  }
}

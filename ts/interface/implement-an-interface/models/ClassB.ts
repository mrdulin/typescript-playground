import { IPrintable } from '../@types';

export class ClassB implements IPrintable {
  public print(): void {
    console.log('ClassB.print()');
  }
}

import { ClassA, ClassB } from './models';
import { print } from './';
import { IPrintable } from './@types';

describe('interface/implement-an-interface test suites', () => {
  it('print ClassA', () => {
    const a = new ClassA();
    print(a);
    // expect().toBe();
  });
  it('print ClassB', () => {
    const b = new ClassB();
    print(b);
    // expect().toBe();
  });

  it('instanceof interface', () => {
    const a = new ClassA();

    // instead of using this: (Java)
    // if (a instanceof IPrintable) {
    // }

    // interface type check
    function isPrintable(instance: any): instance is IPrintable {
      return 'print' in instance;
    }
    isPrintable(a);
  });
});

import { ClassA, ClassB } from './models';
import { print } from './';

describe('interface/implement-an-interface test suites', () => {
  it('print ClassA', () => {
    const a = new ClassA();
    print(a);
    // expect().toBe();
  });
  it('print ClassB', () => {
    const a = new ClassB();

    print(b);
    // expect().toBe();
  });
});

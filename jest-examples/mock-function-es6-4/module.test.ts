import m from './module';

//通过定义class，在class中定义方法，导出该class的方式，jest可以mock class中的方法
describe('mock function test suites', () => {

  it('t-1', () => {

    const methods = Reflect.ownKeys(Reflect.getPrototypeOf(m)).filter(fn => fn !== 'constructor');

    for(let method of methods) {
      expect(jest.isMockFunction(m[method])).toBeFalsy();
    }

  });

  it('t-2', () => {
    
    m.genName = jest.fn(() => 'Aimee');
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(m.genName.mock.calls.length).toBe(1);
    expect(m.genName()).toBe('Aimee');
    expect(m.genName.mock.calls.length).toBe(2);

  });

  it('t-3', () => {
    m.getAge = jest.fn(() => 99);
    expect(jest.isMockFunction(m.getAge)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(m.genName.mock.calls.length).toBe(3);
  });


});

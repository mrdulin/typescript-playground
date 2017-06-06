import m from './module';

//通过定义一个对象，并将所有方法作为对象的属性，导出该对象的方式，jest可以成功mock该对象内的方法
describe('mock function test suites', () => {

  it('t-0', () => {

    const methods = Reflect.ownKeys(m).filter(fn => fn !== 'constructor');
    expect(methods).toEqual(['getMessage', 'genName', 'getAge']);

    for(let method of methods) {
      expect(jest.isMockFunction(m[method])).toBeFalsy();
    }

  });

  it('t-1', () => {

    expect(m.genName()).toBe('novaline');
    expect(m.getAge()).toBe(26);
    expect(m.getMessage()).toBe('Her name is novaline, age is 26');

  });

  it('t-2', () => {

    m.genName = jest.fn(() => 'Aimee');
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(m.genName).toHaveBeenCalled();
    expect(m.genName.mock.calls.length).toBe(1);

  });

  it('t-3', () => {
    const getAgeSpy = jest.spyOn(m, 'getAge').mockImplementation(() => 99);
    expect(m.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(getAgeSpy).toHaveBeenCalled();
    
    getAgeSpy.mockReset();
    getAgeSpy.mockRestore();
  });

  it('t-4', () => {
    expect(jest.isMockFunction(m.getAge)).toBeFalsy();
  });

});

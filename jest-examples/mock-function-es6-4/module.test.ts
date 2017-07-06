jest.mock('./module');
// import MyService from './module';

const MyService = require('./module');

MyService.implementation(() => {

  const genNameMock = jest.fn(() => 'Aimee');

  return {
    genName: genNameMock
  };

});

const myService = new MyService();


// 通过定义class，在class中定义方法，导出该class的方式，jest可以mock class中的方法
describe('mock function test suites', () => {

  it('t-1', () => {

    const methods: PropertyKey[] = Reflect
      .ownKeys(Reflect.getPrototypeOf(MyService))
      .filter((fn: PropertyKey) => fn !== 'constructor');

    for (const method of methods) {
      expect(jest.isMockFunction(MyService[method])).toBeFalsy();
    }

  });

  it('t-2', () => {

    myService.genName = jest.fn(() => 'Aimee');
    expect(jest.isMockFunction(myService.genName)).toBeTruthy();
    expect(myService.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(myService.genName.mock.calls.length).toBe(1);
    expect(myService.genName()).toBe('Aimee');
    expect(myService.genName.mock.calls.length).toBe(2);

  });

  it('t-3', () => {
    myService.getAge = jest.fn(() => 99);
    expect(jest.isMockFunction(myService.getAge)).toBeTruthy();
    expect(myService.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(myService.genName.mock.calls.length).toBe(3);
  });


});

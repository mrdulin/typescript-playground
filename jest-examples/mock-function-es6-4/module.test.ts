// import MyService from './module';


jest.mock('./module', () => {

  const genNameMock = jest.fn(() => 'Aimee');
  const MyService = require.requireActual('./module');
  const myService = new MyService();

  return {
    genName: genNameMock,
    getMessage: myService.getMessage
  };

});

const mMock = require('./module');

// 通过定义class，在class中定义方法，导出该class的方式，jest可以mock class中的方法
describe('mock function test suites', () => {
  
  

  it('t-1', () => {

    const methods: PropertyKey[] = Reflect
      .ownKeys(Reflect.getPrototypeOf(MyService))
      .filter((fn: PropertyKey) => fn !== 'constructor');

    for (const method of methods) {
      expect(jest.isMockFunction(mMock[method])).toBeFalsy();
    }

  });

  it('t-2', () => {

    // mMock.genName = jest.fn(() => 'Aimee');
    expect(jest.isMockFunction(mMock.genName)).toBeTruthy();
    expect(mMock.getMessage()).toBe('Her name is Aimee, age is 26');
    expect(mMock.genName.mock.calls.length).toBe(1);
    expect(mMock.genName()).toBe('Aimee');
    expect(mMock.genName.mock.calls.length).toBe(2);

  });

  it('t-3', () => {
    mMock.getAge = jest.fn(() => 99);
    expect(jest.isMockFunction(mMock.getAge)).toBeTruthy();
    expect(mMock.getMessage()).toBe('Her name is Aimee, age is 99');
    expect(mMock.genName.mock.calls.length).toBe(3);
  });

});

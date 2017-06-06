import m from './module';

describe('mock function test suites', () => {

  it('t-1', () => {

    expect(jest.isMockFunction(m.getMessage)).toBeFalsy();
    expect(jest.isMockFunction(m.genName)).toBeFalsy();
    expect(jest.isMockFunction(m.getAge)).toBeFalsy();

  });


});

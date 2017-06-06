function mockFunctions() {
  const original = require.requireActual('./module');
  return {
    ...original,
    genName: jest.fn(() => 'emilie')
  }
}
jest.mock('./module', () => mockFunctions());
const moduleA = require('./module');

describe('mock function', () => {

  it('t-0', () => {
    expect(jest.isMockFunction(moduleA.genName)).toBeTruthy();
  });
  
  it('t-1', () => {
    //mock失败
    expect(moduleA.genName(1)).toBe('emilie');
    expect(moduleA.genName).toHaveBeenCalled();
    expect(moduleA.genName.mock.calls.length).toBe(1);
    expect(moduleA.getMessage(1)).toBe('Her name is emilie');
    expect(moduleA.genName.mock.calls.length).toBe(2);

  });

});

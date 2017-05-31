function mockFunctions() {
  const original = require.requireActual('../moduleA');
  return {
    ...original,
    genName: jest.fn(() => 'emilie')
  }
}
jest.mock('../moduleA', () => mockFunctions());
const moduleA = require('../moduleA');

describe('mock function', () => {

  it('t-0', () => {
    expect(jest.isMockFunction(moduleA.genName)).toBeTruthy();
  })
  
  it('t-1', () => {
    
    expect(moduleA.genName(1)).toBe('emilie');
    expect(moduleA.genName).toHaveBeenCalled();
    expect(moduleA.genName.mock.calls.length).toBe(1);
    expect(moduleA.getMessage(1)).toBe('Her name is emilie');
    expect(moduleA.genName.mock.calls.length).toBe(2);

  });

});

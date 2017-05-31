const m = require('../moduleB');

describe('mock function test suites', () => {

  it('t-1', () => {
    
    m.genName = jest.fn(() => 'emilie');
    
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is emilie, age is 26');
    expect(m.genName).toHaveBeenCalled();

  });

  it('t-1.1', () => {

    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    m.genName.mockReset();

  });

  it('t-1.2', () => {

    expect(jest.isMockFunction(m.genName)).toBeFalsy();
    
  });

  it('t-2', () => {

    const getAgeSpy = jest.spyOn(m, 'getAge').mockImplementation(() => 99);
    expect(jest.isMockFunction(m.getAge)).toBeTruthy();
    expect(m.getMessage()).toBe('Her name is emilie, age is 99');
    expect(m.getAge).toHaveBeenCalled();

  });

  it('t-2.1', () => {

    expect(jest.isMockFunction(m.getAge)).toBeTruthy();
    expect(m.getAge()).toBe(99);
    m.getAge.mockRestore();

  });

  it('t-2.2', () => {

    expect(jest.isMockFunction(m.getAge)).toBeFalsy();
    expect(m.getAge()).toBe(26);
    
  });

});

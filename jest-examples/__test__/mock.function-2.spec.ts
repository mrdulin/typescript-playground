import * as m from '../moduleB';
// const m = require('../moduleB');

describe('mock function test suites', () => {

  //es6 module system mock moduleB.genName函数不成功
  it('t-1', () => {
    m.genName = jest.fn(() => 'emilie');
    expect(jest.isMockFunction(m.genName)).toBeTruthy();
    expect(m.genName()).toBe('emilie');
    expect(m.getMessage()).toEqual('Her name is emilie, age is 26');
    expect(m.genName).toHaveBeenCalled(); 
    
  });

});

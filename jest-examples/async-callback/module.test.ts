import fetchData from './module';

describe('async callback test suites', () => {

  //不要这样测试
  //默认地，jest的每个测试用例在函数执行完成后就完成了。
  //例如t-1, 测试用例it的函数在fetchData调用callback之前就完成了。所以callback不会被调用，callback中的expect也就不能按照期望那样执行。
  
  // it('t-1', () => {
  //   expect.assertions(1);

  //   function callback(data) {
  //     expect(data).toEqual({name: 'novaline', age: 26});
  //   }

  //   fetchData(callback);

  // });

  //解决方案：测试用例it函数接收一个参数，如t-2，接收done参数，作用是，测试用例在调用done之前会一直等待，也就是说，只有手动调用了done，该
  //测试用例才算执行完毕。
  //如果done从未被调用，该测试用例会失败

  it('t-2', done => {
    expect.assertions(1);

    function callback(data) {
      expect(data).toEqual({ name: 'novaline', age: 26 });
      done();
    }

    fetchData(callback);

  });


  it('t-3', done => {
    expect.assertions(1);

    function callback(data) {
      expect(data).toEqual({ name: 'novaline', age: 26 });
      done();
    }

    fetchData(callback);
  })

});

/**
 * Created by dulin on 2017/6/27.
 */
//https://stackoverflow.com/questions/18961203/typescript-any-vs-object

namespace objectVsAny{
  interface foo{
    b: Object
  }
  
  interface bar{
    b: any
  }
  
  const fn = (a: foo): void => {
    a.b.method();
  };
  
  
  const fn2 = (a: bar): void => {
    a.b.method();   
  };
  
  const arg: foo = {
    b: {}
  };
  
  const arg2: bar = {
    b: {}
  };
  
  fn(arg);
  fn2(arg2);
}

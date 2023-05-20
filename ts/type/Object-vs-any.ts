// https://stackoverflow.com/questions/18961203/typescript-any-vs-object

namespace objectVsAny {
  interface Ifoo {
    b: object;
  }

  interface Ibar {
    b: any;
  }

  const fn = (a: Ifoo): void => {
    a.b.method();
  };

  const fn2 = (a: Ibar): void => {
    a.b.method();
  };

  const arg: Ifoo = {
    b: {}
  };

  const arg2: Ibar = {
    b: {}
  };

  fn(arg);
  fn2(arg2);
}

// 泛型匿名箭头函数

function wrapper() {
  return <T>(arg: T): T => {
    return arg;
  };
}

export { wrapper };

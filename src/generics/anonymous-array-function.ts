// 泛型匿名箭头函数

function wrapper() {
  return <T>(arg: T): T => {
    return arg;
  }
}

const inner = wrapper();

const result: string = inner<string>('novaline');

console.log(result);

export {};

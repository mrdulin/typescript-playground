function square(x: number) {
  return Math.pow(x, 2);
}

function log10(x: number) {
  return Math.log10(x);
}

const PI = Math.PI;

// 相比于Math.ts中多次显式使用export导出，可以用增强型对象字面量的方式一次性导出
export { square, log10, PI };

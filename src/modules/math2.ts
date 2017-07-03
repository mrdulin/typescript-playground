function square(x: number) {
  return Math.pow(x, 2);
}

/**
 * vscode报warning: [ts] Property 'log10' does not exist on type 'Math'
 * 解决办法：http://stackoverflow.com/questions/43702518/typescript-property-log10-does-not-exist-on-type-math
 * 解决办法：tsconfig.json中设置compilerOptions: {"target": "es6"}
 * @param x
 */
function log10(x: number) {
  return Math.log10(x);
}

const PI = Math.PI;

//相比于Math.ts中多次显式使用export导出，可以用增强型对象字面量的方式一次性导出
export {square, log10, PI};

/**
 * Created by dulin on 2017/6/23.
 */

// https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#support-for-umd-module-definitions
export as namespace mathLib;
export = mathLib;

declare namespace mathLib {
  const isPrime: (x: number) => boolean;
  function add(x: number, y: number): number;
}




/**
 * Created by dulin on 2017/6/23.
 */
namespace IndexTypes{
  export function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(name => o[name]);
  }

  export interface IPerson{
    name: string;
    age: number;
  }

  const me: IPerson = {
    name: 'novaline',
    age: 23
  };

  console.log(pluck(me, ['name']));
}

//变量me，ts给出Error:(24, 7) TS2451:Cannot redeclare block-scoped variable 'me'.的错误
//和src/interface/interface-inherit.ts文件中声明的变量me产生了冲突
//具体原因: https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

//一个ts文件到底应该被视作模块（模块拥有自己的作用域，其他模块不可见），还是被当做一个脚本（与其他脚本共享全局作用域）?

//typescript的区分办法是：当一个ts文件包含import或者export时，该文件被intellisense当做模块，拥有模块作用域，模块内声明的变量对外部不可见，除非明确使用export导出该变量。
//否则，该ts文件将被视作一个脚本，与其他脚本共享全局作用域，脚本内在顶级作用域声明的变量在其他脚本内可见（这就是报re-declared的原因）。
//解决办法：1. 在文件中写一个export {} 2.使用namespace
const me: IndexTypes.IPerson = {
  name: 'emily',
  age: 24
};

console.log(IndexTypes.pluck(me, ['age']));


export {};

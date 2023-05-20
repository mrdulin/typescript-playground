/**
 * Created by dulin on 2017/6/23.
 */
namespace IndexTypes {
  export type pluckType = <T, K extends keyof T>(o: T, names: K[]) => Array<T[K]>;

  // T[K]，索引访问操作符。 在这里，类型语法反映了表达式语法。 这意味着 person['name']具有类型IPerson['name'] — 在我们的例子里则为string类型。
  // 所以，这里pluck函数的返回值类型是: string[]
  export function pluck<T, K extends keyof T>(o: T, names: K[]): Array<T[K]> {
    return names.map(name => o[name]);
  }

  // https://stackoverflow.com/questions/44713581/typescript-how-to-implement-an-interface-with-index-types-use-function-expressi
  const pluck_v2: pluckType = (o: IPerson, names: Array<keyof IPerson>): Array<IPerson[keyof IPerson]> => {
    return names.map(name => o[name]);
  };

  export interface IPerson {
    name: string;
    age: number;
  }

  const me: IPerson = {
    name: 'novaline',
    age: 23
  };

  console.log(pluck(me, ['name']));
  console.log(pluck_v2(me, ['name']));
}

// 变量me，ts给出Error:(24, 7) TS2451:Cannot redeclare block-scoped variable 'me'.的错误
// 和src/interface/interface-inherit.ts文件中声明的变量me产生了冲突
// 具体原因: https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files

// 一个ts文件到底应该被视作模块（模块拥有自己的作用域，其他模块不可见），还是被当做一个脚本（与其他脚本共享全局作用域）?

// typescript的区分办法是：当一个ts文件包含import或者export时，该文件被intellisense当做模块，拥有模块作用域，模块内声明的变量对外部不可见，除非明确使用export导出该变量。
// 否则，该ts文件将被视作一个脚本，与其他脚本共享全局作用域，脚本内在顶级作用域声明的变量在其他脚本内可见（这就是报re-declared的原因）。
// 解决办法：1. 在文件中写一个export {} 2.使用namespace
const me: IndexTypes.IPerson = {
  name: 'emily',
  age: 24
};

console.log(IndexTypes.pluck(me, ['age']));

// --- keyof T，索引类型查询操作符 ---

const personProps: keyof IndexTypes.IPerson = 'name';
console.log(personProps);

// Error:(52, 1) TS2322:Type '"xxx"' is not assignable to type '"name" | "age"'.
// personProps = 'xxx';

export {};

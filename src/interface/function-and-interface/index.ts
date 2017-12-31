import { SearchFunction, IObj } from './@types';
/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
 * @param src
 * @param sub
 * @returns {boolean}
 */
const search: SearchFunction = function(src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};

const obj: IObj = {
  next(name: string): string {
    return name;
  }
};

export { search, obj };

/**
 * Created by dulin on 2017/6/20.
 */
interface searchFn{
  (source: string, subString: string): boolean;
}

/**
 * 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。
 * @param src
 * @param sub
 * @returns {boolean}
 */
const mySearchFn: searchFn = function(src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};


console.log(mySearchFn('novaline', 'l ine'));


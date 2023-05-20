// https://stackoverflow.com/questions/44839191/pass-a-function-string-name-to-a-function-tsc-throw-an-error/44842195#44842195

// 传递一个方法名到另一函数
// Error:(9, 14) TS7015:Element implicitly has an 'any' type because index expression is not of type 'number'.
function convert(str: string, methodName: string): string {
  return str[methodName]();
}

// 解决方案一：

function convert_v2(str: string, methodName: string): string {
  return (str as any)[methodName]();
}

// 解决方案二：

type StringMethodWithZeroParameter = 'toLowerCase' | 'toUpperCase';

function convert_v3(str: string, methodName: StringMethodWithZeroParameter = 'toLowerCase'): string {
  return str[methodName]();
}

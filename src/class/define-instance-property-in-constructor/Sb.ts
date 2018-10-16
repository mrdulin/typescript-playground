// 相比于Animal在构造函数中手动进行赋值操作，Sb构造函数中的这种方式会自动赋值，可以查看编译后的文件
// 它可能看上去不像是有属性的类，但它确实有，利用的是 TypeScript 提供的简写形式 —— 用构造函数的参数直接定义属性。
class Sb {
  constructor(private firstName: string, private lastName: string) {}
}
export { Sb };

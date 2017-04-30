class Person {
  @nonenumerable
  get kidCount() {
    return 42;
  }

  get age() {
    return 23;
  }
}

/**
 * @desc 装饰器 - 将被装饰的属性设置为不可枚举
 * @param target: Person类
 * @param name: 被装饰的目标属性的名称
 * @param descriptor: 目标属性的描述符
 */
function nonenumerable(target, name, descriptor) {
  //kidCount属性不可枚举
  descriptor.enumerable = false;
  console.log('name: ', name);
  return descriptor;
}

const person = new Person();

for(let prop in person) {
  console.log(prop);
}

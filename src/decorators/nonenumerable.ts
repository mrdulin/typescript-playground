class Person {
  @nonenumerable
  public getKidCount(): number {
    return 42;
  }

  public getAge(): number {
    return 23;
  }
}

/**nodesrc  
 * @desc 装饰器 - 将被装饰的属性设置为不可枚举
 * @param target: Person类
 * @param propertyKey: 被装饰的目标属性的名称
 * @param descriptor: 目标属性的描述符
 */
function nonenumerable(target: Person, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  // kidCount属性不可枚举
  descriptor.enumerable = false;
  console.log('name: ', propertyKey);
  return descriptor;
}

const person: Person = new Person();

for (const prop in person) {
  if (person.hasOwnProperty(prop)) {
    console.log(prop);
  }
}


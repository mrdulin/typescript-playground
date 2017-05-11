//ts 类的静态属性和静态方法
class MathHelper{
  public static PI: number = 3.1415926;
  public static sayHi(name: string): string {
    return `Hi! ${name}`;
  }

  constructor() {}

  areaOfCircle(radius: number): number {
    return radius * radius * this.constructor['PI'];
  }

  sayHello(name: string): string {
    //Property 'sayHi' does not exist on type 'Function'.
    // return this.constructor.sayHi(name);

    //使用 类名.静态属性
    //https://github.com/Microsoft/TypeScript/issues/3836
    return MathHelper.sayHi(name);
  }
}

const math = new MathHelper();
console.log(math.areaOfCircle(5));
console.log(math.sayHello('novaline'));
console.log(MathHelper.sayHi('melon kid'));
console.log(MathHelper.PI);

//ts 类的静态属性和静态方法
class MathHelper {
  public static PI: number = 3.1415926;

  public static sayHi(name: string): string {
    return `Hi! ${name}`;
  }

  constructor() {
  }

  public areaOfCircle(radius: number): number {
    return radius * radius * (this.constructor as any).PI;
  }

  public sayHello(name: string): string {
    //Property 'sayHi' does not exist on type 'Function'.
    // return this.constructor.sayHi(name);

    //使用 类名.静态属性
    //https://github.com/Microsoft/TypeScript/issues/3836
    return MathHelper.sayHi(name);
  }
}

export default MathHelper;

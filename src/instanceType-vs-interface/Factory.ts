declare function create<T extends new () => any>(c: T): InstanceType<T>;

class A {
  public getName() {
    console.log('A');
  }
}
class B {
  public getAge() {
    console.log(22);
  }
}
let a = create(A); // A
let b = create(B); // B

a.getName(); // 'A'
b.getAge(); // 22

declare function create2<T extends new () => any>(c: T): T;

let aa = create2(A); // A
let bb = create2(B); // B

aa.getName(); // Property 'getName' does not exist on type 'typeof A'.ts(2339)
bb.getAge(); // Property 'getAge' does not exist on type 'typeof B'.ts(2339)

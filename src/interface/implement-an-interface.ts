/**
 * Created by dulin on 2017/7/3.
 */
namespace implementAnInterface {

  interface IPrint {
    print(): void;
  }
    
  // 不关心a是哪个类，只关心a是否实现了IPrint接口
  function printClass(a: IPrint) {
    a.print();
  }
  
  class ClassA implements IPrint{
    print(): void {
      console.log('ClassA.print()');
    }
  }

  class ClassB implements IPrint{
    print(): void {
      console.log('ClassB.print()');
    }
  }
  
  let classA = new ClassA();
  let classB = new ClassB();
  
  printClass(classA);
  printClass(classB);
}

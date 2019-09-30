function mixin<T extends new (...a: any[]) => any>(baseClass: T) {
  class Extended extends baseClass {
    public extendedMethod() {}
  }
  return Extended;
}

let FinalClass = mixin(
  class {
    public method() {}
  }
);
let o: FinalClass; // error FinalClass is not a type, it's just a value
let oo: InstanceType<typeof FinalClass>;

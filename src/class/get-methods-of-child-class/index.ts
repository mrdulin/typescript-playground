class Base {
  public transfer() {}
}

class GoogleAccount extends Base {
  public findById(id: string) {}
}

const googleAccount = new GoogleAccount();

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(googleAccount)));
console.log(Object.getOwnPropertyNames(googleAccount));

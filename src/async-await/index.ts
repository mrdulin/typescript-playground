const A = () => new Promise((resolve) => setTimeout(resolve, 1000, '123'));

const obj = {
  async main() {
    const value = await A();
    console.log('value', value);
    return value;
  }
};

console.log(obj.main());

class MyService {
  getMessage(): string {
    return `Her name is ${this.genName()}, age is ${this.getAge()}`;
  }

  genName(): string {
    return 'novaline';
  }

  getAge(): number{
    return 26;
  }
}

export default new MyService();

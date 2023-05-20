interface ICallMeWithNewToGetString {
  new (): string;
}

declare const Foo: ICallMeWithNewToGetString;
// bar: string
const bar = new Foo();

export {};

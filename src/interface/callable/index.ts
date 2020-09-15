interface IOverloaded {
  (foo: string): string;
  (foo: number): number;
}

function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === 'string') {
    return `hello, ${foo}`;
  } else if (typeof foo === 'number') {
    return foo * foo;
  }
}

const overloaded: IOverloaded = stringOrNumber;
console.log(overloaded(''));
console.log(overloaded(2));

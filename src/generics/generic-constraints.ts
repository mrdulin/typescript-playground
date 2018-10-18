// --- 泛型约束 ---

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

interface Ix {
  [key: string]: number;
}

const x: Ix = { a: 1, b: 2, c: 3, d: 4 };

const aValue: number = getProperty<Ix, string>(x, 'a');

console.log(aValue);
// Error:(13, 28) TS2345:Argument of type '"x"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// console.log(getProperty(x, 'x'));

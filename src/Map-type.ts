const map1: Map<string, string> = new Map<string, string>([
  ['a', 'react'],
  ['b', 'rxjs'],
  ['c', 'angular']
]);

console.log(map1.get('a'));

const map2: Map<string, (string: string) => string> = new Map<string, (string: string) => string>([
  ['a', (str: string) => str],
  ['b', (str: string) => str]
]);

const aFn = map2.get('a');
const aValue = aFn ? aFn('react') : '';
console.log(aValue);

export { };

function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

const bar = foo();

const resultList: any[] = [
  bar.next(),
  bar.next(),
  bar.next(),
  bar.next(),
  bar.next(),
  bar.next()
];

for (let result of resultList) {
  console.log(result);
}

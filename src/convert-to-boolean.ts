const a: string = 'false';

const isAdd: boolean = Boolean(a).valueOf();

console.log('isAdd: ', isAdd);

if (isAdd) {
  // do something
}

for (const iterator of [1, 2, 3]) {
  if (iterator !== 3) {
    continue;
  }
  console.log('iterator: ', iterator);
}

export {};

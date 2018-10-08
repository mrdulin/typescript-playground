function rq(i) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log('11');
      if (i === 2) {
        return reject('error happened');
      }
      console.log('------');
      resolve(22);
    }, 1000)
  );
}

const arr: any[] = [1, 2, 3];

const promises = arr.map(i => rq(i));
// console.log('promises: ', promises);

// Promise.all(promises)
// .then(() => console.log(333))
// .then(() => console.log('promises: ', promises[0] instanceof Promise))
// .then(() => promises[0])
// .then(val => console.log('promises[0] value: ', val));

// setTimeout(() => {
//   console.log('results:', Promise.all(promises).then(() => console.log(3333)));
// }, 2000);

// rq();
// rq();
// rq();

// Promise.all([rq(), rq(), rq()]).then(() => console.log(444));

Promise.all(promises.map(p => p.catch(err => 'fallback value'))).then(([a, b, c]) => console.log(a, b, c));

// const result = rq();
// setTimeout(() => {
//   console.log('result: ', result);
// }, 3000);

export {};

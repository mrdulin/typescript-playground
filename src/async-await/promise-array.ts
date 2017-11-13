const A = () => new Promise((resolve, reject) => {
  console.log('aaa');
  setTimeout(resolve, 1000, 'a');
});
const B = () => new Promise((resolve, reject) => {
  console.log('bbb');
  setTimeout(resolve, 1000, 'b');
});

// await后面可以跟一个常量，下面的例子，js解释器虽然不会报错，但是程序是错误的，
// Promise.all[A(), B()]，可以理解为使用索引从Promise.all方法的静态属性上取值，由于没有这个值，所以是undefined
// 如果使用ts, tsc会给出"[ts] 类型“Promise<{}>”不能作为索引类型使用。"的错误

// 类似于这样:
// const obj = {a: 1, b: 2};
// console.log(obj['a', 'b']) // =>2


async function main() {
  return await Promise.all[A(), B()];
}

main().then((results) => {
  console.log(results);
}).catch(console.log);

export { };

// async/await + try...catch

const coin = () => Math.random() < 0.5;
const request = () => new Promise((resolve, reject) => {
  console.log('request timestamp', Date.now());
  setTimeout(() => {
    const coinValue = coin();
    const result = coinValue ? '请求成功' : '请求失败';
    coinValue ? resolve(result) : reject(result);
  }, 1000);
});
const timeout = () => new Promise((resolve, reject) => {
  console.log('timeout timestamp', Date.now());
  setTimeout(reject, 900, new Error('请求超时'));
});

async function main() {
  try {
    return await Promise.race([
      timeout(),
      request()
    ])
      .then((result) => {
        console.log('result', result);
        return Promise.reject('请求依旧失败');
      });
  } catch (e) {
    console.log('catch', e);
    return e;
  }
}

main();

export { };

// async/await的请求超时

const timeout = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timeout timestamp: ', Date.now());
    reject('请求超时~');
  }, 1000);
});

const coin = () => Math.random() < 0.5;
const request = () => new Promise((resolve, reject) => {
  console.log('request timestamp: ', Date.now());
  setTimeout(() => {
    const coinValue = coin();
    const result = coinValue ? '请求成功' : '请求失败';
    coinValue ? resolve(result) : reject(result);
  }, 1100);
});

//使用promise的方式
const main = () => {
  Promise.race([timeout(), request()])
    .then((result) => {
      console.log('result', result);
    })
    .catch((e) => {
      console.error(e);
    });
};

// main();

//使用async/await的方式
async function componentDidMount() {
  let result, error;
  try {
    result = await Promise.race([request(), timeout()]);
  } catch (e) {
    error = e;
  }
  console.log(result, error);
}

componentDidMount();


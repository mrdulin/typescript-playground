// async/await的请求超时

const timeout = () =>
  new Promise((resolve, reject) => {
    console.log('timeout timestamp: ', Date.now());
    setTimeout(() => {
      reject(new Error('请求超时~'));
    }, 1000);
  });

const coin = () => Math.random() < 0.5;
const request = () =>
  new Promise((resolve, reject) => {
    console.log('request timestamp: ', Date.now());
    setTimeout(() => {
      const coinValue = coin();
      const result = coinValue ? '请求成功' : '请求失败';
      coinValue ? resolve(result) : reject(result);
    }, 900);
  });

//使用promise的方式
const main = () => {
  Promise.race([timeout(), request()])
    .then(result => {
      console.log('result', result);
    })
    .catch(e => {
      console.error(e);
    });
};

// main();

//使用async/await的方式
async function componentDidMount() {
  let result;
  let error;
  try {
    result = await Promise.race([request(), timeout()]);
  } catch (e) {
    error = e;
  }
  console.log(result, error);
}

// componentDidMount();

// 上述两种方式，使用promise.race来处理请求超时, 有一个问题，就是尽管timeout这个promise先reject了，并不会取消其他proimse对象的执行。
// 也就是说，并不会阻止请求的发出，只是前端没有处理返回的请求(这一次请求的promise已经因为超时被reject掉了)

// 类似的，还有下面这种处理方式
function timeout_v2(ms, promise) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('请求超时'));
    }, ms);
    promise.then(resolve, reject);
  });
}

timeout_v2(1000, request())
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log(err);
  });

export {};

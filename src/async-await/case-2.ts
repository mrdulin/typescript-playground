/**
 * 现有A,B,C三个接口，要求使用async/await语法并行发送3个请求，并有对应的异常处理
 */

interface IApiSuccessResponse {
  errorCode: number;
  content: any;
}

interface IError {
  type: string;
  err: Error;
}

interface IErrorMap {
  [type: string]: IError;
}

/** 
 * true和false的几率各占50%
 */
const coin = (): boolean => Math.random() < 0.5;

let errorSwitch: boolean = false;
const ERROR_MAP: IErrorMap = {
  A: {
    type: 'A',
    err: new Error('A接口请求失败')
  },
  B: {
    type: 'B',
    err: new Error('B接口请求失败')
  },
  C: {
    type: 'C',
    err: new Error('C接口请求失败')
  }
};

/**
 * 模拟接口处理逻辑
 * @param type 根据type模拟接口请求返回不同的结果或异常，为了演示设置的变量，减少重复代码。
 * @param resolve 
 * @param reject 
 */
const handle = (type, resolve, reject) => {
  setTimeout(() => {
    console.log(type, Date.now());
    const error = ERROR_MAP[type];
    const apiRes: IApiSuccessResponse & { type: string } = { type: type.toLowerCase(), errorCode: 0, content: `${type} SUCCESS` };
    if (errorSwitch) {
      coin() ? resolve(apiRes) : reject(error);
    } else {
      resolve(`${type} SUCCESS`);
    }
  }, 3000);
};

/** 
 * 模拟A,B,C三个接口请求（或者理解为异步操作）
 */
const A = () => new Promise((resolve, reject) => handle.call(null, 'A', resolve, reject));
const B = () => new Promise((resolve, reject) => handle.call(null, 'B', resolve, reject));
const C = () => new Promise((resolve, reject) => handle.call(null, 'C', resolve, reject));

//错误的思路：以为A,B,C三个请求按照代码书写顺序从上到下书写，就是并行执行，以为和普通请求的并行的书写方式一样。
//下面这个例子是不使用`async/await`，`A,B,C`三个请求并发的例子。
function m() {
  A();
  B();
  C();
}
// m();
/*输出结果：
A 1510143604973
B 1510143604976
C 1510143604977
*/

//实际上三个请求是串行执行
async function main() {
  errorSwitch = false;
  let error;
  try {
    const resultA = await A();
    const resultB = await B();
    const resultC = await C();
  } catch (e) {
    //任何一个请求出错，代码执行流程会立即进入catch，意味着后面的请求不会发送，这可能不是我们想要的结果，因为A,B,C三个请求是独立的，没有依赖关系的。
    //A请求的失败，不应该影响B,C请求。
    error = e;
  }
  console.error(error);
}
// main();
/*输出结果:
A 1510143604977
B 1510143607981
C 1510143610982
*/
interface IStateModel {
  errorMessage?: string;
  data?: any;
}

interface IState {
  [type: string]: IStateModel;
}

let state: IState = {
  //a, b, c三个API请求结果，对应视图上三块区域，如果API请求成功，将请求结果赋值给相应的变量的data字段，如果请求失败，则将错误信息赋值给errorMessage变量
  a: {
    errorMessage: '',
    data: {}
  },
  b: {
    errorMessage: '',
    data: {}
  },
  c: {
    errorMessage: '',
    data: {}
  }
};
function setState(callback: (state: IState) => IState) {
  const nextState: IState = callback.call(null, state);
  state = nextState;
  const tpl: string = render();
  console.log(tpl);
  /** 
   *  <section>
   *     <p>A SUCCESS</p>
   *     <p>B接口请求失败<p/>
   *     <p>C SUCCESS</p>
   *   </section>
   */
}
function render() {
  console.log('nextState: ', state);
  const { a, b, c } = state;
  return `
    <section>
      ${a.errorMessage ? `<p>${a.errorMessage}<p/>` : `<p>${a.data}</p>`}
      ${b.errorMessage ? `<p>${b.errorMessage}<p/>` : `<p>${b.data}</p>`}
      ${c.errorMessage ? `<p>${c.errorMessage}<p/>` : `<p>${c.data}</p>`}
    </section>
  `;
}

async function componentDidMount() {
  errorSwitch = true;
  let results: IState[];
  try {
    //Promise.all的行为是：A,B,C都resolve，则resolve, 只要有一个reject, 则reject，这明显不是我们需要的。
    //我们需要的是，不论A,B,C哪个reject，Promise.all依旧resolve，所以需要将[A(), B(), C()]这个可能包含rejected promise的promise数组通过map方法映射一组新的promise数组
    //这个新的promise数组都是resolve的
    results = (await Promise.all([A(), B(), C()].map((promise) => {
      return promise
        //接口正常，将请求结果包装成特定的数据结构返回
        .then((apiRes: IApiSuccessResponse & { type: string }): IState => {
          return {
            [apiRes.type]: {
              data: apiRes.content
            }
          };
        })
        //接口异常，包装前端预定义好的错误信息返回
        .catch((e: IError) => {
          const { type, err } = e;
          let error: IState = {
            [type.toLowerCase()]: {
              errorMessage: err.message
            }
          };
          return error;
        });
    })));

    setState((prevState: IState): IState => {
      let nextState: IState = {};
      results.forEach((result: IState, idx: number) => {
        const type = Object.keys(result)[0];
        const data: IStateModel = result[type];
        nextState[type] = {};
        Object.assign(nextState[type], prevState[type], data);
      });
      return nextState;
    });
  } catch (e) {
    //捕获其他异常
    console.error('componentDidMount', e.message);
  }

}
componentDidMount();

export { };

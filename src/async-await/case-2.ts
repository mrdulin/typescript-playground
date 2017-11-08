/**
 * 现有A,B,C三个接口，要求使用async, await语法并行发送3个请求，并有对应的异常处理
 */

const coin = () => Math.random() < 0.5;
let errorSwitch: boolean = false;

const handle = (name, resolve, reject) => {
    setTimeout(() => {
        console.log(name, Date.now());
        if (errorSwitch) {
            coin() ? resolve(`${name} SUCCESS`) : reject(`${name} FAILED`);
        } else {
            resolve(`${name} SUCCESS`);
        }
    }, 3000);
};

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

function setState(data, error) {
    if (error) {
        return console.error(error);
    }
    console.log(data);
}

async function componentDidMount() {
    let error;
    let a, b, c;
    const finalResult = (await Promise.all([A(), B(), C()].map((result) => {
        return result.catch((e) => '');
    }))).filter((x) => x);

    setState(finalResult, error);
}
errorSwitch = true;
componentDidMount();

// async function componentDidMount() {
//     let error;
//     let deferredA = A();
//     let deferredB = B();
//     let deferredC = C();
//     // let finalResult;
//     let a, b, c;
//     try {
//         // finalResult = [await resultA, await resultB, await resultC];
//         a = await deferredA;
//         b = await deferredB;
//         c = await deferredC;
//     } catch (e) {
//         error = e;
//     }

//     setState({ a, b, c }, error);
// }
// errorSwitch = true;
// componentDidMount();


export { };

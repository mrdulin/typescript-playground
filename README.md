# learning typescript

## 食用说明：

* `ts-node file.ts`来运行例子
* [ts-jest](https://github.com/kulshekhar/ts-jest)可以使用`typescript`语法来写`jest`的单元测试
* `npm run test:watch`，监视文件变动（变动是指`git`没有commit的文件）重新运行单元测试
* `mock-function-xxx`，测试了在不同环境下(`es6`, `commonjs`, `ts`)，并且函数导出方式不同，能否通过`jest.fn()`进行`mock`.

## 关于`typescript`的第三方库的描述文件`@types/xxx`

`typescript`最早使用`tsd`作为管理`typescript`应用中描述文件的工具，见[repo](https://github.com/DefinitelyTyped/tsd), 但是由于本身有缺陷和性能问题，被废弃。见[link](https://stackoverflow.com/questions/35598876/why-is-tsd-deprecated)。逐渐被`typings`取代。`typescript 2.0`之前（不包括2.0），使用[Typings](https://github.com/typings/typings)工具来对`typescript`应用中的描述文件进行管理。
`typescript 2.0`开始，可以使用`npm`, `yarn`这些包管理工具直接安装第三方描述文件，详见[link](https://tslang.cn/docs/handbook/declaration-files/consumption.html)

## 开发中遇到的一些问题

* 慎用`git clean -f`， 删除`untracked files`。

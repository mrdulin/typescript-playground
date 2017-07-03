# TypeScript Playground

## 食用说明：

* 使用`webstorm`，`intellisense`比较强大 
* `ts-node file.ts`来运行例子
* [ts-jest](https://github.com/kulshekhar/ts-jest)可以使用`typescript`语法来写`jest`的单元测试
* `npm run test:watch`，监视文件变动（变动是指`git`没有commit的文件）重新运行单元测试
* `mock-function-xxx`，测试了在不同环境下(`es6`, `commonjs`, `ts`)，并且函数导出方式不同，能否通过`jest.fn()`进行`mock`.

## 关于`typescript`的第三方库的描述文件`@types/xxx`

* `typescript`最早使用`tsd`作为管理`typescript`应用中描述文件的工具，见[repo](https://github.com/DefinitelyTyped/tsd), 但是由于本身有缺陷和性能问题，被废弃。见[link](https://stackoverflow.com/questions/35598876/why-is-tsd-deprecated)。逐渐被`typings`取代。`typescript 2.0`之前（不包括2.0），使用[Typings](https://github.com/typings/typings)工具来对`typescript`应用中的描述文件进行管理。
* `typescript 2.0`开始，可以使用`npm`, `yarn`这些包管理工具直接安装第三方描述文件，详见[link](https://tslang.cn/docs/handbook/declaration-files/consumption.html)

## 开发中遇到的一些问题

* 使用`git clean -f -n`查看可以被删除的`untracked files`。
* 使用`git clean -f`， 删除`untracked files`。


## 疑难杂症

* 接口字符串索引签名和数字索引签名
* `declare module 'xxx'`, `declare module xxx`, `declare namespace xxx`区别
  * https://github.com/Microsoft/TypeScript/issues/13774
  * https://stackoverflow.com/questions/41932585/what-is-the-difference-between-declare-namespace-and-declare-module


## 其他说明

* `tsc`使用`tsconfig.json`作为编译器配置，`tsconfig.json`还可以提供项目的全局配置。例如，我们可以在项目根目录下运行`tsc`，
编译器将会递归的查找项目的根目录和子目录，并编译所有`ts`文件。

* 使用`tsc --init`快速生成`tsconfig.json`文件。

* `tsc`允许项目中有多个`tsconfig.json`文件，这样就可以实现不同目录下使用该目录下的`tsconfig.json`编译器配置文件进行编译。

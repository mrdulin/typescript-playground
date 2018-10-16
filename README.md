# ts codelab

## 说明

- `npm run test:w`，监视文件变动（变动是指`git`没有 commit 的文件）并重新运行单元测试
- `tsc`使用`tsconfig.json`作为编译器配置，`tsconfig.json`还可以提供项目的全局配置。例如，我们可以在项目根目录下运行`tsc`，编译器将会递归的查找项目的根目录和子目录，并编译所有`ts`文件。
- 使用`tsc --init`快速生成`tsconfig.json`文件。
- `tsc`允许项目中有多个`tsconfig.json`文件，这样就可以实现不同目录下使用该目录下的`tsconfig.json`编译器配置文件进行编译。

## 关于`typescript`的第三方库的描述文件`@types/xxx`

`typescript`最早使用`tsd`作为管理`typescript`应用中描述文件的工具，见[repo](https://github.com/DefinitelyTyped/tsd), 但是由于本身有缺陷和性能问题，被废弃。
见[link](https://stackoverflow.com/questions/35598876/why-is-tsd-deprecated)。
逐渐被`typings`取代。`typescript 2.0`之前（不包括 2.0），使用[Typings](https://github.com/typings/typings)工具来对`typescript`应用中的描述文件进行管理。

`typescript 2.0`开始，可以使用`npm`, `yarn`这些包管理工具直接安装第三方描述文件，详见[link](https://tslang.cn/docs/handbook/declaration-files/consumption.html)

## FAQ

- 使用`git clean -f -n`查看可以被删除的`untracked files`。
- 使用`git clean -f`， 删除`untracked files`。

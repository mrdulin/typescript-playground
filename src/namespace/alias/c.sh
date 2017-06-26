#!/usr/bin/env bash
## 在终端中将路劲切换到当前目录
## 根据main.ts文件中reference的引用的文件的顺序，按此顺序编译输出到一个js文件中，随后可以在html中通过script标签引入
## 如果不指定--out参数，将会分别编译main.ts中reference引用的文件
../../../node_modules/.bin/tsc --out main.js main.ts


/**
 * Created by dulin on 2017/6/23.
 */
import {isPrime} from 'math-lib';
console.log(isPrime(2));

//Error:(7, 13) TS2686:'mathLib' refers to a UMD global, but the current file is a module. Consider adding an import instead.
// console.log(mathLib.isPrime(2));

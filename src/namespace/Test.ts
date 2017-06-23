/**
 * Created by dulin on 2017/6/23.
 */
// 如果没有下面的引用，编译时会报错：error TS2503: Cannot find namespace 'Validation'.
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
  
// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log("" + s + "" + (validators[name].isAcceptable(s) ? " matches " : " does not match ") + name);
  }
}

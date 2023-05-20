/**
 * Created by dulin on 2017/6/23.
 */
/// <reference path='Validation.ts'/>
  
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}

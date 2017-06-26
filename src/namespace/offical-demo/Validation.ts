/**
 * Created by dulin on 2017/6/23.
 */
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
}

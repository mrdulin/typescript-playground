import { IAccountable } from '../@types';

class Firm implements IAccountable {
  public getIncome(): number {
    return 2222;
  }
}

export { Firm };

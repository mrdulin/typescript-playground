import { IAccountable } from '../@types';

class Individual implements IAccountable {
  public getIncome(): number {
    return 3333;
  }
}

export { Individual };

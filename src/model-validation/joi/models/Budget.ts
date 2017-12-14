import Joi from 'joi';
import { BaseModel } from './Base';

class Budget extends BaseModel {
  private static schema = Joi.object().keys({
    budgetId: Joi.string().optional(),
    name: Joi.string().required(),
    isExplicitlyShared: Joi.boolean()
  });

  private budgetId?: string;
  private isExplicitlyShared: boolean = false;
  private name: string = '';

  constructor(obj?: { budgetId?: string; name: string; isExplicitlyShared?: boolean }) {
    super();
    super.validate(obj, Budget.schema);
    Object.assign(this, obj);
  }
}

export { Budget };

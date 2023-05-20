import Joi, { SchemaLike, ValidationError } from 'joi';

interface Validatable {
  validate<T>(value: T, schema: SchemaLike): void;
}

abstract class BaseModel implements Validatable {
  private static validationError: ValidationError | undefined;

  constructor(obj: any, schema: SchemaLike) {
    this.validate(obj, schema);
  }

  public validate<T>(value: T, schema: SchemaLike): void {
    const validationResult = Joi.validate(value, schema);
    this.setValidationError(validationResult.error);
  }

  public isValid(): boolean {
    return !BaseModel.validationError;
  }

  public getValidationError(): ValidationError | undefined {
    return BaseModel.validationError;
  }

  private setValidationError(error: ValidationError | undefined): void {
    BaseModel.validationError = error;
  }
}

export { BaseModel };

import { customErrorMessage, nestedTryCatch } from './nested-try-catch';

describe('nested try/catch test suites', () => {
  it('should log "inside error"', () => {
    expect(nestedTryCatch).toThrowError('inside error');
  });
});

describe('custom error message test suites', () => {
  it('should print custom error message', () => {
    customErrorMessage();
  });
});

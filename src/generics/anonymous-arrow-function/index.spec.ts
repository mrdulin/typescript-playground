import { wrapper } from './';

describe('generics/anonymous-arrow-function test suites', () => {
  it('Test', () => {
    const inner = wrapper();
    const result: string = inner<string>('novaline');
    expect(result).toBe('novaline');
  });
});

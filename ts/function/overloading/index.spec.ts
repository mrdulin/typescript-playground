import { overloading } from '.';

describe('function/overloading test suites', () => {
  it('t-1', () => {
    expect(overloading('Remo')).toBe('My name is Remo.');
  });

  it('t-2', () => {
    expect(overloading(26)).toBe("I'm 26 years old.");
  });

  it('t-3', () => {
    expect(overloading(false)).toBe("I'm not single.");
  });

  it('error', () => {
    // overloading({ custom : "custom" });
  });
});

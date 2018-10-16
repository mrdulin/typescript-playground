import { add } from './';

describe('function/rest-parameters test suites', () => {
  it('Test', () => {
    const results = [add(), add(2), add(2, 2), add(2, 2, 2), add(2, 2, 2, 2), add(2, 2, 2, 2, 2)];

    for (const result of results) {
      // TODO
      console.log(result);
      expect(1).toBe(1);
    }
  });
});

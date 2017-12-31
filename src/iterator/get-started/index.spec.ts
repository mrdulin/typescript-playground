import { Component, Frame } from './models';

describe('iterator/get-started test suites', () => {
  it('Test', () => {
    const frame = new Frame('door', [
      new Component('left'),
      new Component('right'),
      new Component('top'),
      new Component('bottom')
    ]);

    for (let i = 0; i < 5; i++) {
      console.log(frame.next());
    }
    // TODO
    // expect().toBe();
  });
});

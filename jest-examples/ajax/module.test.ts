jest.mock('./request');

import * as user from './user.service';

describe('ajax test suites', () => {
  it('works with promises', () => {
    expect.assertions(1);
    return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
  });
})

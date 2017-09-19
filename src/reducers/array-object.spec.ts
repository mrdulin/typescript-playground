import { bookReducer, books } from './array-object';

describe('bookReducer test suites', () => {

  it('t-1', () => {

    const action = {
      type: 'UPDATE_NAME',
      payload: {
        id: 0,
        name: 'rxjs'
      }
    };

    const actualValue = bookReducer(books, action);
    const expectedValue = [
      { id: 0, name: 'rxjs' },
      { id: 1, name: 'react' }
    ];

    expect(actualValue).toEqual(expectedValue);
    expect(actualValue).not.toBe(expectedValue);
    expect(actualValue).not.toBe(books);
    expect(books).toEqual([
      { id: 0, name: 'angular' },
      { id: 1, name: 'react' }
    ]);
    expect(actualValue[0]).not.toBe(expectedValue[0]);
    expect(actualValue[1]).toEqual(expectedValue[1]);

  });

});

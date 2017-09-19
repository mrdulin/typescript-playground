import { initialState, reducer } from './nested-object';

describe('nested-object reducer test suites', () => {

  it('t-0', () => {

    const source = { name: 'react', arr: [1, 2, 3] };
    const actualValue = Object.assign({}, source, { name: 'rxjs' });
    const expectedValue = { name: 'rxjs', arr: [1, 2, 3] };
    expect(actualValue).toEqual(expectedValue);
    expect(actualValue.arr).toBe(source.arr);
  });

  it('t-1', () => {

    const action = {
      type: 'UPDATE_NAME',
      payload: {
        name: 'react'
      }
    };

    const actualValue = reducer(initialState, action);
    const expectedValue = {
      info: {
        name: 'react',
        version: 4,
        arr1: [1, 2, 3],
        arr2: [3, 2, 1]
      }
    };

    expect(actualValue).toEqual(expectedValue);
    expect(actualValue).not.toBe(expectedValue);
    expect(actualValue.info).not.toBe(expectedValue.info);
    expect(actualValue.info.arr1).not.toBe(expectedValue.info.arr1);
    expect(actualValue.info.arr1).toBe(initialState.info.arr1);

  });

  it('t-2', () => {

    const action = {
      type: 'UPDATE_NAME_WAY_2',
      payload: {
        name: 'react'
      }
    };

    const actualValue = reducer(initialState, action);
    const expectedValue = {
      info: {
        name: 'react',
        version: 4,
        arr1: [1, 2, 3],
        arr2: [3, 2, 1]
      }
    };

    expect(actualValue).toEqual(expectedValue);
    expect(actualValue).not.toBe(expectedValue);
    expect(actualValue.info).not.toBe(expectedValue.info);
    expect(actualValue.info.arr1).not.toBe(expectedValue.info.arr1);

  });

});

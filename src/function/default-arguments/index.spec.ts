import { MemberState, Component } from './models';
import { IAction } from './@types';
import { defaultFnArg, memberReducer } from './';

describe('function/default-arguments test suites', () => {
  it('should get state correctly', () => {
    const action: IAction<any> = {
      type: 'MEMBER_SAVE',
      payload: {}
    };

    const state: MemberState = memberReducer(undefined, action);

    console.log('state: ', state);
  });

  it('component', () => {
    const comp = new Component();
    comp.m();
    comp.a();
  });

  it('defaultFnArg - 1', () => {
    const a = null;
    defaultFnArg(a);
  });

  it('defaultFnArg - 1', () => {
    const b = undefined;
    defaultFnArg(b);
  });
});

/**
 * Created by dulin on 2017/6/27.
 */
namespace defaultArgs {
  class MemberEntity {
    public constructor(
      public id: number = -1,
      public login: string = '',
      public avatar_url: string = ''
    ) {}
  }

  class MemberState {
    public memberId: number;
    public saveCompleted: boolean;
    public constructor(public member: MemberEntity) {
      this.memberId = -1;
      this.saveCompleted = false;
    }
  }

  const member = new MemberEntity();

  interface BaseAction {
    type: string;
  }

  interface Action < Payload > extends BaseAction {
    payload ? : Payload;
    error ? : boolean;
    meta ? : any;
  }

  //这里到底用Action<{}>还是Action<any>?
  function memberReducer(state: MemberState = new MemberState(member), action: Action < any > ): MemberState {
    let newState: MemberState;

    switch (action.type) {
      case 'MEMBER_SAVE':
        console.log('action:', JSON.stringify(action, null, 2));
        newState = Object.assign({}, state, { saveCompleted: true });
        return newState;
      default:
        return state;
    }
  }

  const action: Action < any > = {
    type: 'MEMBER_SAVE',
    payload: {}
  };

  const state: MemberState = memberReducer(undefined, action);

  console.log('state: ', state);


  class Component {
    public label: string = 'ts';
    public m(x = this.label) {
      console.log(x);
    }

    public a = (x = this.label) => {
      console.log(x);
    }
  }
  const comp = new Component();
  comp.m();
  comp.a();


  function main(x: any = (function(ctx: any) { console.log(ctx); })(global as any)) {
    console.log('main');
  }

  let a = null;
  let b;
  // main(a);
  // main(b);

  export {};

}

//参考：
//https://github.com/reactjs/redux/issues/992

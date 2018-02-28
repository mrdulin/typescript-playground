import { MemberEntity, MemberState } from "./models";
import { IAction } from "./@types";

const member = new MemberEntity();
const defualtState = new MemberState(member);

// 这里到底用Action<{}>还是Action<any>?
function memberReducer(
  state: MemberState = defualtState,
  action: IAction<any>
): MemberState {
  let newState: MemberState;

  switch (action.type) {
    case "MEMBER_SAVE":
      console.log("action:", JSON.stringify(action, null, 2));
      newState = Object.assign({}, state, { saveCompleted: true });
      return newState;
    default:
      return state;
  }
}

function defaultFnArg(
  x: any = (function(ctx: any) {
    // console.log(ctx);
  })(global as any)
) {
  console.log("main");
}

export { memberReducer, defaultFnArg };

// 参考：
// https://github.com/reactjs/redux/issues/992

import { MemberEntity } from './MemberEntity';

class MemberState {
  public memberId: number;
  public saveCompleted: boolean;
  public constructor(public member: MemberEntity) {
    this.memberId = -1;
    this.saveCompleted = false;
  }
}

export { MemberState };

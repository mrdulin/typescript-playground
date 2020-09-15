type Constructor<T = {}> = new (...args: any[]) => T;

class User {
  public name = '';
}

function TimeStamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public timestamp = Date.now();
  };
}

function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public isActivated = false;
    public activate() {
      this.isActivated = true;
    }
    public deactivate() {
      this.isActivated = false;
    }
  };
}

const TimestampedUser = TimeStamped(User);
const timestampedUser = new TimestampedUser();
console.log('timestampedUser:', timestampedUser);

const TimestampedActivatableUser = Activatable(TimeStamped(User));
const timestampedActivatableUser = new TimestampedActivatableUser();
console.log('timestampedActivatableUser: ', timestampedActivatableUser);

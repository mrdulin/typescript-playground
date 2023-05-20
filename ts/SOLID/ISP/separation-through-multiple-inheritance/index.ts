// TimerClient at top of hierarchy
namespace separationThroughMultipleInheritance {
  interface ITimeClient {
    timeout(): void;
  }

  interface IDoor {
    lock(): void;
    unLock(): void;
    isDoorOpen(): boolean;
  }

  class Timer {
    public register(timeout: number, client: ITimeClient, callback: () => void) {
      setTimeout(() => {
        client.timeout();
        callback();
      }, timeout);
    }
  }

  /**
   * The interface of Door has been polluted with a method that it does not require.
   *
   * @author dulin
   * @class Door
   * @implements {ITimeClient}
   */
  class Door implements IDoor {
    private isOpen: boolean = false;
    constructor(isOpen: boolean) {
      this.isOpen = isOpen;
    }
    public lock(): void {
      this.isOpen = false;
    }
    public unLock(): void {
      this.isOpen = true;
    }
    public isDoorOpen(): boolean {
      return this.isOpen;
    }
  }

  class TimedDoor extends Door implements IDoor, ITimeClient {
    public timeout() {
      if (this.isDoorOpen()) {
        console.log('lock the timedDoor');
        this.lock();
      }
    }
  }

  class Tester {
    public static main() {
      const timedDoor: TimedDoor = new TimedDoor(true);
      const timer: Timer = new Timer();

      timer.register(1000, timedDoor, () => {
        console.log('timedDoor is open: ', timedDoor.isDoorOpen());
      });
    }
  }

  Tester.main();
}

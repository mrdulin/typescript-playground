namespace separationThroughDelegation {
  interface IDoor {
    lock(): void;
    unLock(): void;
    isDoorOpen(): boolean;
  }

  interface ITimeClient {
    timeout(): void;
  }

  class Timer {
    public register(timeout: number, client: ITimeClient, callback: () => void) {
      setTimeout(() => {
        client.timeout();
        callback();
      }, timeout);
    }
  }

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

  interface ITimedDoor extends IDoor {
    doorTimeout(): void;
  }

  class DoorTimerAdapter implements ITimeClient {
    private timedDoor: ITimedDoor;
    constructor(door: ITimedDoor) {
      this.timedDoor = door;
    }
    public timeout() {
      this.timedDoor.doorTimeout();
    }
  }

  class TimedDoor extends Door implements IDoor {
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

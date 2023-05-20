// TimerClient at top of hierarchy
namespace ISP {
  interface ITimeClient {
    timeout(): void;
  }

  interface IDoor extends ITimeClient {
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
    public timeout(): void {
      throw new Error('Method not implemented.');
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

  class TimedDoor implements IDoor {
    private isOpen: boolean = false;
    constructor(isOpen: boolean) {
      this.isOpen = isOpen;
    }
    public lock(): void {
      throw new Error('Method not implemented.');
    }
    public unLock(): void {
      throw new Error('Method not implemented.');
    }
    public isDoorOpen(): boolean {
      throw new Error('Method not implemented.');
    }
    public timeout() {
      if (this.isDoorOpen()) {
        console.log('lock the timedDoor');
        this.lock();
      }
    }
  }

  class Tester {
    public static main() {
      const door: Door = new Door(true);
      const timedDoor: TimedDoor = new TimedDoor(true);
      const timer: Timer = new Timer();

      timer.register(1000, door, () => {
        console.log('door is open: ', door.isDoorOpen());
      });
      timer.register(1000, timedDoor, () => {
        console.log('timedDoor is open: ', timedDoor.isDoorOpen());
      });
    }
  }

  Tester.main();
}

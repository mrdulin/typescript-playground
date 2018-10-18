namespace Geometry {
  export interface IVector2dInterface {
    toArray(callback: (x: number[]) => void): void;
    length(): number;
    normalize(): void;
  }

  export class Vector2d implements IVector2dInterface {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    public toArray(callback: (x: number[]) => void): void {
      callback([this.x, this.y]);
    }

    public length(): number {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    public normalize(): void {
      const len = 1 / this.length();
      this.x *= len;
      this.y *= len;
    }
  }
}

export { Geometry };

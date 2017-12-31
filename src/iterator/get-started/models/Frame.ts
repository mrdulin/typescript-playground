import { Component } from './Component';

class Frame implements Iterator<Component> {
  private pointer: number = 0;

  constructor(public name: string, public components: Component[]) {}

  public next(): IteratorResult<Component> {
    if (this.pointer < this.components.length) {
      return {
        done: false,
        value: this.components[this.pointer++]
      };
    } else {
      return {
        done: true,
        value: {} as Component
      };
    }
  }
}

export { Frame };

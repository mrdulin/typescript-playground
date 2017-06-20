/**
 * Created by dulin on 2017/6/20.
 */
class Component{
  constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
  
  private pointer: number = 0;
  
  constructor(public name: string, public components: Component[]) {}
  
  public next(): IteratorResult<Component> {
    if(this.pointer < this.components.length) {
      return {
        done: false,
        value: this.components[this.pointer++]
      };
    } else {
      return {
        done: true,
        value: {} as Component
      }
    }
  }
}

const frame = new Frame('door', [new Component('left'), new Component('right'), new Component('top'), new Component('bottom')]);


for(let i = 0; i < 5; i ++) {
  console.log(frame.next());
}

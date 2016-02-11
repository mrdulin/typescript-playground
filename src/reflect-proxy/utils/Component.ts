import observable from './observable';
import { IComponentOpt, IHTMLELement } from '../interfaces';

function querySelector(selector: string): IHTMLELement {
  const el: IHTMLELement = { innerHtml: '', selector };
  return el;
}

class Component {
  public state = observable({}, this.stateObserve);
  public props = observable({}, this.propsObserve);

  private el: IHTMLELement;
  private templateHtml: string;

  constructor(opt: IComponentOpt) {
    this.templateHtml = opt.templateHtml;
    if (typeof opt.el === 'string') {
      this.el = querySelector(opt.el);
    } else {
      this.el = opt.el;
    }
  }

  public componentDidMount() {
    console.log('Component componentDidMount');
  }
  public setState(nextState: object & { [key: string]: any }) {
    for (const x in nextState) {
      if (nextState.hasOweProperty(x)) {
        this.state[x] = nextState[x];
      }
    }
  }
  public render() {
    this.el.innerHtml = this.templateHtml;
    this.componentDidMount();
    return this.el.innerHtml;
  }

  private stateObserve(nextState) {
    this.render();
  }
  private propsObserve(nextProps) {
    this.render();
  }
}

export { Component };

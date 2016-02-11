import { Component } from './utils/Component';
import { IComponentOpt, IHTMLELement } from './interfaces';

class ListComponent extends Component {
  constructor(opt: IComponentOpt) {
    super(opt);
    this.state = {
      items: ['react', 'typescript', 'angular']
    };
  }

  public render() {
    return super.render();
  }
  private onItemClick(item) {}
}

const list = new ListComponent({
  el: '.list',
  templateHtml: `
    <ul>
      <li>react</li>
      <li>typescript</>
      <li>angular</li>
    </ul>
  `
});

console.log(list.render());

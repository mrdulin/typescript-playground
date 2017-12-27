interface IHTMLELement {
  innerHtml: string;
  selector: string;
}

interface IComponentOpt {
  el: string | IHTMLELement;
  templateHtml: string;
}

export { IHTMLELement, IComponentOpt };

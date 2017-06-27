/**
 * Created by dulin on 2017/6/27.
 */
export as namespace React;
  
export class Component<Props, State>{
  public props: Props;
  public state: State;
}

export class PureComponent<P, S>{
  public props: P;
  public state: S;
}
  



interface IBaseAction {
  type: string;
}

interface IAction<Payload> extends IBaseAction {
  payload?: Payload;
  error?: boolean;
  meta?: any;
}

export { IBaseAction, IAction };

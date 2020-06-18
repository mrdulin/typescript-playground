interface IRequestOptions {
  body?: any;
  params: any;
}
interface IRequest {
  someProperty: string;
  post(uri: string, options: IRequestOptions): any;
  get(uri: string, options?: IRequestOptions): any;
}

type PickMethod<T, MethodName extends keyof T> = T[MethodName] extends (...args: any[]) => any
  ? (...args: Parameters<T[MethodName]>) => ReturnType<T[MethodName]>
  : never;

type PostMethodType = PickMethod<IRequest, 'post'>;

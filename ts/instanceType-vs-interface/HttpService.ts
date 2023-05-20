export interface IHttpService {
  request(): Promise<any>;
  formPostRequest(): any;
}

export class HttpService implements IHttpService {
  public async request() {
    //
  }

  public formPostRequest() {
    //
  }
}

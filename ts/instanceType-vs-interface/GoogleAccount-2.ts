import { IHttpService } from './HttpService';

class GoogleAccount2 {
  private httpService: IHttpService;
  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  public findGoogleAccountById(id: string) {
    return this.httpService.request();
  }
}

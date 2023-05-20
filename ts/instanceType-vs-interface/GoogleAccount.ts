import { HttpService } from './HttpService';

class GoogleAccount {
  private httpService: InstanceType<typeof HttpService>;
  constructor(httpService: InstanceType<typeof HttpService>) {
    this.httpService = httpService;
  }

  public findGoogleAccountById(id: string) {
    return this.httpService.request();
  }
}

import * as Types from './main';

class SoapService {
  public get(selector: Types.ISelector) {
    return 'soap get';
  }
}

export { SoapService, Types };

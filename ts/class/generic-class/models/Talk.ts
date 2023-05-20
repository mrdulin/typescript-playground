import { IValidatable } from './@types';

class Talk implements IValidatable {
  public title: string = '';
  public description: string = '';
  public language: string = '';
  public url: string = '';
  public year: number = new Date().getFullYear();

  public isValid(): boolean {
    return true;
  }
}

export { Talk };

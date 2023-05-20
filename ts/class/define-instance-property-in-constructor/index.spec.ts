import { App, HomeComponent, Animal, Sb } from '.';

describe('Typescript Class method and property test suites', () => {
  describe('Class App', () => {
    it('should have "name" and "version" properties of an instance of Class App', () => {
      const app: App = new App();
      expect(app.name).toBe('fxxk zxm');
      expect(app.version).toBe(0.1);
    });
  });

  describe('Class HomeComponent', () => {
    it('should have "name" and "version" properties of an instance of Class HomeComponent', () => {
      const homeComponent: HomeComponent = new HomeComponent();
      expect(homeComponent.name).toBe('fxxk yk');
      expect(homeComponent.version).toBe(0.2);
    });
  });

  describe('Class Animal', () => {
    it('zxm instance', () => {
      const zxm: Animal = new Animal('章', '向明');
      expect(JSON.stringify(zxm)).toBe('{"firstName":"章","lastName":"向明"}');
    });

    it('t-1', () => {
      const zxm: Animal = new Animal('章', '向明');
      console.log(JSON.stringify(zxm));
      // Property 'firstName' is private and only accessible within class 'Animal'. (2341)
      // console.log(zxm.firstName);
    });
  });

  describe('Class Sb', () => {
    it('yk instance', () => {
      const yk: Sb = new Sb('yin', 'kang');
      expect(JSON.stringify(yk)).toBe('{"firstName":"yin","lastName":"kang"}');
    });

    it('t-1', () => {
      const yk: Sb = new Sb('yin', 'kang');
      console.log(JSON.stringify(yk));
      // console.log(yk.firstName);
    });
  });
});

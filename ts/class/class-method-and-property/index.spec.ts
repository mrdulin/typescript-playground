import MathHelper from '.';

describe('MathHelper Class Test Suites', () => {
  it('should be return PI value', () => {
    expect(MathHelper.PI).toBe(3.1415926);
  });

  it('should be return an string when call static method "sayHi" of MathHelper class', () => {
    expect(MathHelper.sayHi('emilie')).toBe('Hi! emilie');
  });

  it('should be return an string when an instance of MathHelper Class call "sayHello" method', () => {
    const mathInstance: MathHelper = new MathHelper();
    expect(mathInstance.sayHello('emilie')).toBe('Hi! emilie');
  });

  it('shoule be return an area of circle', () => {
    const mathInstance: MathHelper = new MathHelper();
    expect(mathInstance.areaOfCircle(5)).toBe(5 * 5 * 3.1415926);
  });
});

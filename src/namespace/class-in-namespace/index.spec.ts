import { Geometry } from './';

describe('namespace/class-in-namespace test suites', () => {
  let vector: Geometry.IVector2dInterface;
  beforeEach(() => {
    vector = new Geometry.Vector2d(2, 3);
  });
  it('should normalize correctly', () => {
    vector.normalize();
  });

  it('should toArray correctly', () => {
    vector.toArray((vectorAsArray: number[]) => {
      console.log('x : ' + vectorAsArray[0] + ' y : ' + vectorAsArray[1]);
    });
  });
});

import { someCloudFunction } from './';

describe('CloudFunctionService', () => {
  it('#getFunctionName', async () => {
    const name: string = await someCloudFunction();
    expect(name).toBe('someCloudFunction');
  });
});

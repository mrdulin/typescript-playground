import { CloudFunctionService } from './cloudfunction.service';

async function someCloudFunction() {
  return CloudFunctionService.getFunctionName(someCloudFunction);
}

export { someCloudFunction };

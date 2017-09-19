class CloudFunctionService {
  public static getFunctionName(func: () => void) {
    return func.name || CloudFunctionService.getFunctionName.caller.name;
  }
}

export { CloudFunctionService };

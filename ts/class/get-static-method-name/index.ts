class CloudFunction {
  public static parse() {
    console.log(this.name);
    console.log(CloudFunction.parse.name);
  }
}

CloudFunction.parse();

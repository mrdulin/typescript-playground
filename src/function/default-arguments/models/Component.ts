class Component {
  public label: string = 'ts';
  public m(x = this.label) {
    console.log(x);
  }

  public a = (x = this.label) => {
    console.log(x);
  };
}

export { Component };

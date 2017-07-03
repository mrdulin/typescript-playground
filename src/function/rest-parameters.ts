namespace restParameter {

  function add(...args: number[]): number {
    let result = 0;
    for (let arg of args) {
      result += arg;
    }
    return result;
  }

  const results = [
    add(),
    add(2),
    add(2, 2),
    add(2, 2, 2),
    add(2, 2, 2, 2),
    add(2, 2, 2, 2, 2)
  ];

  for (let result of results) {
    console.log(result);
  }
}


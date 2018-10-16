function add(...args: number[]): number {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
}

export { add };

function sume(a: number, b: number, callback: (result: number) => void): void {
  callback(a + b);
}

sume(1, 2, (result) => {
  console.log(result);
});

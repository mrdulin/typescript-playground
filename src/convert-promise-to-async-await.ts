function example(): Promise<boolean> {
  return fetch('https://stackoverflow.com').then(result => result.ok);
}

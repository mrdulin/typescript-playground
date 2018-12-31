function asyncTask(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}

export { asyncTask };

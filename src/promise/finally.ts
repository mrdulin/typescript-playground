function asyncTask(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(message);
    }, 1000);
  });
}
function publish(message: any, cb: () => any) {
  return asyncTask(message)
    .then(() => {
      console.log(message);
    })
    .catch(err => {
      console.error(err);
    })
    .finally(cb);
}

publish("promise.prototype.finally", () => {
  console.log("callback");
});

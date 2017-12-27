const obj = {
  name: 'react',
  year: 2
};
const loggedObj = new Proxy(obj, {
  get(target, name) {
    console.log('get', target, name);
    return Reflect.get(target, name);
  },
  deleteProperty(target, name) {
    console.log('delete' + name);
    return Reflect.deleteProperty(target, name);
  },
  has(target, name) {
    console.log('has', target, name);
    return Reflect.has(target, name);
  }
});

if (Reflect.has(loggedObj, 'name')) {
  const objName = loggedObj.name; //get { name: 'react', year: 2 } name
}

if ('name' in loggedObj) {
  const objName = loggedObj.name; //get { name: 'react', year: 2 } name
}

function observable(obj, observe) {
  return new Proxy(obj, {
    get(target, propertyKey, receiver) {
      console.log('proxy get');
      return Reflect.get(target, propertyKey, receiver);
    },
    set(target, property, value, receiver) {
      console.log('proxy set');
      const ret = Reflect.set(target, property, value, receiver);
      if (ret) {
        observe(target);
      }
      return ret;
    },
    // set和defineProperty都可以实现劫持给对象赋值的操作
    // defineProperty(target, propertyKey, descriptor) {
    //   console.log('proxy defineProperty');
    //   const ret = Reflect.defineProperty(target, propertyKey, descriptor);
    //   observe(target);
    //   return ret;
    // },
    deleteProperty(target, propertyKey) {
      console.log('proxy deleteProperty');
      const ret = Reflect.deleteProperty(target, propertyKey);
      if (ret) {
        observe();
      }
      return ret;
    },
  });
}

export default observable;

import observable from './utils/observable';

const obj = observable({}, function observe(self) {
  console.log('self:', self);
  console.log('name: ', obj.name);
});
obj.name = 'react';
obj.name = 'angular';
Reflect.deleteProperty(obj, 'name');

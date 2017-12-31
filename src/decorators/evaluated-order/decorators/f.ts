import { DecoratorFunction } from '../@types';

function f(): DecoratorFunction<PropertyDescriptor> {
  console.log('f(): evaluated');

  return function(target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('f(): called');
    return descriptor;
  };
}

export { f };

import { DecoratorFunction } from '../@types';

function g(): DecoratorFunction<PropertyDescriptor> {
  console.log('g(): evaluated');

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log('g(): called');
    return descriptor;
  };
}

export { g };

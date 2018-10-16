import { getUsers, getEntities, getOrders } from './';
import { User, Order } from './models';

describe('function/generic', () => {
  it('getUsers', () => {
    getUsers(
      (users: User[]): void => {
        for (const user of users) {
          console.log(user.name);
        }
      }
    );
  });

  it('getOrders', () => {
    getOrders(function(orders: Order[]): void {
      for (const order of orders) {
        console.log(order.total);
      }
    });
  });

  it('getEntities - 1', () => {
    getEntities<User>('users', function(users: User[]) {
      for (const user of users) {
        console.log(user.name);
      }
    });
  });

  it('getEntities - 2', () => {
    getEntities<Order>('orders', function(orders: Order[]) {
      for (const order of orders) {
        console.log(order.total);
      }
    });
  });
});

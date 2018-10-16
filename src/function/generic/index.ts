import { User, Order } from './models';

function getUsers(cb: (users: User[]) => void): void {
  setTimeout(_ => {
    const users: User[] = [{ name: 'novaline', age: 232 }, { name: 'melon kid', age: 23 }];
    cb(users);
  }, 1000);
}

function getOrders(cb: (orders: Order[]) => void): void {
  setTimeout(() => {
    const orders: Order[] = [{ id: 1, total: 233, items: [2, 2, 2] }, { id: 2, total: 23.3, items: [1, 1, 1] }];
    cb(orders);
  }, 1000);
}

/**
 * 使用泛型来解决这种类型的代码重复
 */
function getEntities<T>(url: string, cb: (list: T[]) => void): void {
  setTimeout(() => {
    let datas: any[];
    if (url === 'users') {
      datas = [{ name: 'novaline', age: 232 }, { name: 'melon kid', age: 23 }];
    } else {
      datas = [{ id: 1, total: 233, items: [2, 2, 2] }, { id: 2, total: 23.3, items: [1, 1, 1] }];
    }

    cb(datas);
  }, 1000);
}

export { getUsers, getOrders, getEntities };

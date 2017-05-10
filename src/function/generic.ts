class User{
  public name: string;
  public age: number;
}

class Order{
  public id: number;
  public total: number;
  public items: any[];
}

function getUsers(cb: (users: User[]) => void): void{
  setTimeout(_ => {
    const users: User[] = [
      {name: 'novaline', age: 232},
      {name: 'melon kid', age: 23},
    ];
    cb(users);
  }, 1000);
}

getUsers((users: User[]): void => {
  for(let user of users) {
    console.log(user.name);
  }
});

function getOrders(cb: (orders: Order[]) => void): void {
  setTimeout(() => {
    const orders: Order[] = [
      {id: 1, total: 233, items: [2,2,2]},
      {id: 2, total: 23.3, items: [1,1,1]}
    ];
    cb(orders);
  }, 1000);
}


getOrders(function(orders: Order[]):  void {
  for(let order of orders) {
    console.log(order.total);
  }
});

/**
 * 使用泛型来解决这种类型的代码重复
 */
function getEntities<T>(url: string, cb: (list: T[]) => void): void {
  setTimeout(() => {
    let datas: any[];
    if(url === 'users') {
      datas = [
        {name: 'novaline', age: 232},
        {name: 'melon kid', age: 23},
      ];
    } else {
      datas = [
        {id: 1, total: 233, items: [2,2,2]},
        {id: 2, total: 23.3, items: [1,1,1]}
      ];
    }

    cb(datas);
  }, 1000);
}

getEntities<User>('users', function(users: User[]) {
  for(let user of users) {
    console.log(user.name);
  }
});

getEntities<Order>('orders', function(orders: Order[]) {
  for(let order of orders) {
    console.log(order.total);
  }
});

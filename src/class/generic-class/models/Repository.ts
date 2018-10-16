import { IValidatable } from '../@types';

class Repository<T extends IValidatable> {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public getAsync(): Promise<T[]> {
    // const list: T[] = data.items;
    // TODO: 添加数据验证逻辑
    // const dataList: T[] = [];
    // const items: T[] = data.items;
    // for(let item of items) {
    //
    // 下面这种方式的缺点：
    // 每增加一个实例，都要修改Repository类，增加额外的逻辑，范型类不应该知道范型的类型
    //   if(item instanceof User) {
    //     //validate user
    //   }
    //   if(item instanceof Talk) {
    //     //validate Talk
    //   }
    // }
    // 一个更好的解决方案是给获取的实例增加一个isValid方法
    // 遵循了SOLID原则中得开/闭原则，可以在GenericRepository类正常工作的情况下增加一个新的实例（对扩展开放），
    // 但是不需要额外的修改代码（对已有的修改封闭）。
    // 还有一点需要注意，并不是所有类型都有isValid方法，所以需要进行范型约束，对类型进行约束。

    return new Promise(resolve => {
      const data: { items: T[] } = { items: [] };
      const list: T[] = [];
      const items: T[] = data.items;
      for (const item of items) {
        if (item.isValid()) {
          list.push(item);
        }
      }
      resolve(items);
    });
  }
}

export { Repository };

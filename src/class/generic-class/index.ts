/**
 * Created by elsa on 2017/6/26.
 */
//范型类能够帮助我们避免重复代码
  
namespace GenericClass {
  
  interface IValidatable{
    isValid(): boolean;
  }

  class User implements IValidatable{
    public name: string;
    public age: number;
    public isValid(): boolean {
      // user validation
      return true;
    }
    
  }
  
  class Talk implements IValidatable {
    public title: string;
    public description: string;
    public language: string;
    public url: string;
    public year: string;
    public isValid(): boolean {
      //talk validation
      return true;
    }
  }

  class GenericRepository<T extends IValidatable> {
    private _url: string;

    constructor(url: string) {
      this._url = url;
    }

    public getAsync() {
      const dfd = $.Deferred();
      $.ajax({
        url: this._url,
        type: 'GET',
        dataType: 'json'
      }).then(data => {
        // const list: T[] = data.items;
        // dfd.resolve(list);
        
        //添加数据验证逻辑
        // const dataList: T[] = [];
        // const items: T[] = data.items;
        // for(let item of items) {
        //
        //下面这种方式的缺点：
        //每增加一个实例，都要修改GenericRepository类，增加额外的逻辑，范型类不应该知道范型的类型
        //   if(item instanceof User) {
        //     //validate user
        //   }
        //   if(item instanceof Talk) {
        //     //validate Talk
        //   }
        // }
        
        //一个更好的解决方案是给获取的实例增加一个isValid方法
        //遵循了SOLID原则中得开/闭原则，可以在GenericRepository类正常工作的情况下增加一个新的实例（对扩展开放），
        //但是不需要额外的修改代码（对已有的修改封闭）。
        //还有一点需要注意，并不是所有类型都有isValid方法，所以需要进行范型约束，对类型进行约束。
        const list: T[] = [];
        const items: T[] = data.items;
        for(let item of items) {
          if(item.isValid()) {
            list.push(item);
          }
        }
        dfd.resolve(list);
      }).catch((jqXHR, textStatus, error) => {
        dfd.reject(error);
      });
      return dfd.promise();
    }
  }

  const userRepository = new GenericRepository<User>('./users.json');
  userRepository.getAsync().then((users: User[]) => {
    console.log(users);
  }).catch(e => {
    console.error(e);
  });
  
  const talkRepository = new GenericRepository<Talk>('./talks.json');
  talkRepository.getAsync().then((talks: Talk[]) => {
    console.log(talks);
  }).catch(e => {
    console.error(e);
  });
  
  //下面的不符合范型约束，编译时期会报错
  // error TS2339: Property 'isValid' does not exist on type 'T'.
  // new GenericRepository<number>('./sdsd');
}

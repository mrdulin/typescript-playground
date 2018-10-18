class Hero {
  public name: string = '';
  public state: string = '';
}

const heroes: Hero[] = [];

// 传统的构造对象的方式
const hero: Hero = new Hero();
hero.name = 'novaline';
hero.state = 'active';
heroes.push(hero);
// 代码行数较多，没那么优雅

// 下面介绍三种简洁的方式，tslint都会对对象的字段进行类型检查
const hero1: Hero = {
  name: 'emily',
  state: 'active'
};

// 类型断言是在编译时期的静态转型，而不是运行时期的动态转型
// 编译出来的js代码中，并没有Hero类型，只是Object类型，所以并没有所谓的运行时期的动态转型
// 类型断言实际上只有两个功能：1.编译时期的类型检查 2.开发时期的intellisense

// 下面这两种写法，就算少了state字段，tslint也不会给出提示，并且使用tsc编译时也不会报错，只有第一种类型声明的形式，当少些字段时，tslint才会给出提示，并且编译时会报错
const hero2 = <Hero>{
  name: 'emilie',
  state: 'active'
};

const hero3 = {
  name: 'novaline',
  state: 'active'
} as Hero;

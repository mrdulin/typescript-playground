const obj = {
  getNumber(): number{
    return 222;
  }
};

//tsconfig的target是es6(es2015)时，不能使用export赋值的这种方式导出模块
export = obj;

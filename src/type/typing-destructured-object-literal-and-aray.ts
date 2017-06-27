/**
 * Created by dulin on 2017/6/27.
 */
namespace typingDestructuredObjectLiteralAndArray{
  
  const action = {
    type: 'SEARCH/QUERY_BOOK',
    payload: {
      total: 100,
      books: ['react', 'angular', 'typescript']
    },
    error: false,
    meta: {
      query: 'react',
      page: 1
    } 
  };

  // -- 对象字面量结构赋值 --

  const {total, books}: {total: number, books: Array<string>} = action.payload;
  console.log(total, books);
  
  
  // -- 数组结构赋值 - 1 --
  const [firstBook, secondBook, lastBook]: Array<string> = action.payload.books;
  console.log(firstBook, secondBook, lastBook);

  // -- 数组结构赋值 - 2 --
  const names: [string, string, string] = ['react', 'angular', 'typescript'];
  const [q,w,e]: [string, string, string] = names;
  console.log(q,w,e);

  // -- 数组结构赋值 - 3 --
  const [a, b]: [number, number] = [1, 1];
  console.log(a, b);
  
  
  // -- 下面这两种方式都不行 --
  // 因为books被类型推断成了Array<string>类型
  // const [firstBook, secondBook, lastBook]: [string, string, string] = action.payload.books;
  // const [firstBook, ...rest]: [string, string[]] = action.payload.books;
  
  
}



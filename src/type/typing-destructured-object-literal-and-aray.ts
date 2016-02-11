namespace typingDestructuredObjectLiteralAndArray {
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

  // -- 对象字面量解构赋值 --

  const { total, books }: { total: number; books: string[] } = action.payload;
  console.log(total, books);

  // -- 对象字面量解构赋值 + rest operator --
  const { x, y, ...rest }: { x: number; y: number; [key: string]: number } = { x: 1, y: 2, z: 3, q: 4 };
  console.log(rest);

  // -- 数组结构赋值 - 1 --
  const [firstBook, secondBook, lastBook]: string[] = action.payload.books;
  console.log(firstBook, secondBook, lastBook);

  // -- 数组结构赋值 - 2 --
  const names: [string, string, string] = ['react', 'angular', 'typescript'];
  const [q, w, e]: [string, string, string] = names;
  console.log(q, w, e);

  // -- 数组结构赋值 - 3 --
  const [a, b]: [number, number] = [1, 1];
  console.log(a, b);

  // -- 下面这两种方式都不行 --
  // 因为books被类型推断成了Array<string>类型
  // const [firstBook, secondBook, lastBook]: [string, string, string] = action.payload.books;
  // const [firstBook, ...rest]: [string, string[]] = action.payload.books;
}

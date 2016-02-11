export const books: any[] = [{ id: 0, name: 'angular' }, { id: 1, name: 'react' }];

export const bookReducer = (state = books, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      const { id, name } = action.payload;

      return state.map(book => {
        if (book.id === id) {
          return { id, name };
        }
        return book;
      });

    default:
      return state;
  }
};

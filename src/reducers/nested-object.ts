export const initialState = {
  info: {
    name: 'angular',
    version: 4,
    arr1: [1, 2, 3],
    arr2: [3, 2, 1]
  }
};

export const reducer = (state = initialState, action) => {
  const { name } = action.payload;
  switch (action.type) {
    case 'UPDATE_NAME':
      return Object.assign({}, state, {
        info: {
          ...state.info,
          name
        }
      });
    case 'UPDATE_NAME_WAY_2':
      return Object.assign({}, state, {
        info: Object.assign({}, state.info, { name })
      });
    default:
      return state;
  }
};

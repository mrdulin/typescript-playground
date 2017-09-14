const state = {
  a: { name: 'react' },
  b: { name: 'angular' },
  c: { name: 'rxjs' }
};

const nextState = {
  ...state,
  a: { name: 'jquery' }
};

console.log(nextState);

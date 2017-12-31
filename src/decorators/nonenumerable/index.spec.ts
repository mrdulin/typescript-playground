import { Person } from './models';

describe('decorators/nonenumerable test suites', () => {
  it('Test', () => {
    const person: Person = new Person();

    for (const prop in person) {
      if (person.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }
    // expect().toBe();
  });
});

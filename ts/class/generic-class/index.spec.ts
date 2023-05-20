import { Repository, User, Talk } from './models';

describe('generic class test suites', () => {
  it('should throw error when use error generic', () => {
    // 下面的不符合范型约束，编译时期会报错
    // error TS2339: Property 'isValid' does not exist on type 'T'.
    // const repo = new Repository<number>('./sdsd');
  });

  it('user repo', () => {
    const userRepository = new Repository<User>('./users.json');
    return userRepository.getAsync().then((users: User[]) => {
      console.log(users);
    });
  });

  it('talk repo', () => {
    const talkRepository = new Repository<Talk>('./talks.json');
    return talkRepository.getAsync().then((talks: Talk[]) => {
      console.log(talks);
    });
  });
});

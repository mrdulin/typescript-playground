import faker from 'faker';

import { PostService, UserService } from './lib/dist';

const postService = new PostService({});
console.log(PostService.PostType.A);

const userService = new UserService();
userService.add({ name: faker.name.findName(), email: faker.internet.email() });
console.log(JSON.stringify(userService.getAll()));

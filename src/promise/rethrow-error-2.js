const faker = require('faker');

const { UserService } = require('./services/use-cases/user.service');

async function controller(userService) {
  const userInput = {
    name: faker.name.findName(),
    email: faker.internet.email()
  };
  try {
    const user = await userService.createUser(userInput, true);
    console.log('user: ', user);
  } catch (error) {
    console.log('----');
    console.error(new Error(error));
  }
}

const userService = new UserService();
controller(userService);

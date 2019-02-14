function mockRequest(exception: boolean) {
  return new Promise((resolve, reject) => {
    if (exception) {
      return reject('error happened');
    }
    setTimeout(resolve, 1000);
  });
}

const UserDomain = {
  async createUser() {
    return mockRequest(true)
      .then(user => {
        console.log('Create user successfully.');
        return user;
      })
      .catch(error => {
        console.error(error);
        throw new Error('Create user failed.');
      });
  }
};

async function UserController() {
  try {
    const userResult = await UserDomain.createUser();
  } catch (error) {
    console.error(error);
  }
}

UserController();

export { UserController };

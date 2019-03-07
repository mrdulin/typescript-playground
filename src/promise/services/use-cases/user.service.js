const { HttpService } = require('../core/http.service');

const UserService = function() {
  const httpService = new HttpService();

  const publicMethods = {
    createUser(userInput, exception) {
      const options = {
        body: userInput
      };
      return httpService
        .request(options, exception)
        .then(response => {
          console.log('create user successfully. response: ', response);
          return response;
        })
        .catch(error => {
          console.log('create user failed.');
          return Promise.reject(error);
        });
    }
  };

  return {
    ...publicMethods
  };
};

module.exports = { UserService };

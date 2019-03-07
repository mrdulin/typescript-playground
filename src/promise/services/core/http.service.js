const HttpService = function() {
  const privateMethods = {
    apiGateWay(req) {
      return req
        .then(response => {
          const stdResponse = { data: response };
          return stdResponse;
        })
        .catch(error => {
          return Promise.reject(error.message || error);
        });
    }
  };

  const publicMethods = {
    fakeRequest(body, exception) {
      return new Promise((resolve, reject) => {
        if (exception) {
          return reject('error happened');
          // or
          // return reject(new Error('error happened'));
        }
        setTimeout(resolve.call(null, body), 1000);
      });
    },

    request(options, exception) {
      const { body } = options;
      return privateMethods.apiGateWay(publicMethods.fakeRequest(body, exception));
    }
  };

  return {
    ...publicMethods
  };
};

module.exports = { HttpService };

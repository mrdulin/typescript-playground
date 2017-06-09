import User from './User';

const fetchData = (callback: (user: User) => void) => {
  setTimeout(() => {
    const user: User = new User('novaline', 26);
    callback(user);
  }, 1000);
};

const fetchData_V2 = (num: number): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(num > 0) {
        const user: User = new User('novaline', 26);
        resolve(user);
      } else {
        reject(new Error({code: 404, msg: 'user not exist'}));
      }
      
    }, 1000);
  });
}

export {
  fetchData,
  fetchData_V2
};

const fetchData = (callback) => {
  setTimeout(() => {
    const data = {name: 'novaline', age: 26};
    callback(data);
  }, 1000);
};

export default fetchData;

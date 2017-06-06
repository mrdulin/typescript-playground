function getMessage() {
  return `Her name is ${genName()}, age is ${getAge()}`;
}

const genName = () => 'novaline';

const getAge = () => 26;

export default {
  getMessage,
  genName,
  getAge
};


// https://stackoverflow.com/questions/52828352/tsc-still-throw-an-error-after-validating-propertys-existing

interface IMessage<Body> {
  type?: string;
  body?: Body;
}

interface IValidMessage<Body> {
  type: string;
  body: Body;
}

interface ICreateUserParameter {
  name: string;
  age: number;
}

function validateMessage<Body>(message: IMessage<Body>): message is IValidMessage<Body> {
  if (!message.type) {
    console.error('message.type is required');
    return false;
  }
  if (!message.body) {
    console.error('message.body is required');
    return false;
  }
  return true;
}

function main(message: IMessage<ICreateUserParameter>) {
  if (!validateMessage<ICreateUserParameter>(message)) {
    return;
  }

  createUser(message.body);
}

function createUser(body: ICreateUserParameter) {
  return body;
}

export { main };

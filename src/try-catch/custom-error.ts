class HttpRequestError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.name = HttpRequestError.name;
  }
}

function main() {
  throw new HttpRequestError(500, 'Server Error');
}

try {
  main();
} catch (error) {
  console.error(error);
  console.error('error status: ', error.status);
  console.error('error name: ', error.name);
  console.error('error code: ', error.code);
}

export {};

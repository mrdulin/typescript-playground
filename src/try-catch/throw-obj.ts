function main() {
  throw new Error({ code: 401, message: 'unauthorized' });
}

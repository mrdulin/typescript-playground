const enum CacheStoragesEnum {
  LOCAL_STORAGE,
  SESSION_STORAGE,
  MEMORY
}

console.log(CacheStoragesEnum.LOCAL_STORAGE);

enum Enum {
  A
}
let a = Enum.A;
let nameOfA = Enum[a];

console.log(nameOfA);

enum CacheStorage {
  LOCAL_STORAGE,
  SESSION_STORAGE,
  MEMORY
}

enum Char {
  A
}

function enumKeys(enu: any): string[] {
  return Object.keys(enu)
    .map(key => enu[key])
    .filter(value => typeof value === "string");
}

export { enumKeys, CacheStorage, Char };

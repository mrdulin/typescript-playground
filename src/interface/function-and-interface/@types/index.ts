type SearchFunction = (source: string, subString: string) => boolean;

interface IObj {
  next(name: string): string;
  throw?(name: string): string;
}

export { SearchFunction, IObj };

interface IAccountable {
  getIncome(): number;
}

interface IClockConstructor {
  new (hour: number, minute: number): void;
}

export { IAccountable, IClockConstructor };

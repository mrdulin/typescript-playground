class Human {
  public static totalPeople = 0;

  constructor(protected name: string, private age: number) {
    Human.totalPeople += 1;
  }

  public talk(): string {
    return `Hi, I\'m ${this.name}`;
  }
}

export default Human;

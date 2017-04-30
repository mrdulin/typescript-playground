class Human{
  static totalPeople = 0;
  constructor(protected name: string, private age: number) {
    Human.totalPeople += 1;
  }
  talk(): string{
    return `Hi, I\'m ${this.name}`;
  }
}

class Developer extends Human{
  constructor(name: string, private languages: string[], age: number) {
    super(name, age);
  }
  talk(): string {
    return `${super.talk()} And I know ${this.languages.join(',')}.`;
  }
}

let dev = new Developer('novaline', ['JavaScript', 'Go'], 23);

//[ts] Property 'languages' is private and only accessible within class 'Developer'.
dev.languages = ['Java'];

let human = new Human('章向明', 40);
//[ts] Property 'age' is private and only accessible within class 'Human'.
human.age = 42;
//[ts] Property 'name' is protected and only accessible within class 'Human' and its subclasses.
human.name = "SB";



/**
 * Created by dulin on 2017/7/7.
 */
import Human from './Human';

class Developer extends Human {
  constructor(name: string, private languages: string[], age: number) {
    super(name, age);
  }

  public talk(): string {
    return `${super.talk()} And I know ${this.languages.join(',')}.`;
  }
}

const dev: Developer = new Developer('novaline', ['JavaScript', 'Go'], 23);

//[ts] Property 'languages' is private and only accessible within class 'Developer'.
// dev.languages = ['Java'];

const human: Human = new Human('章向明', 40);
//[ts] Property 'age' is private and only accessible within class 'Human'.
// human.age = 42;
//[ts] Property 'name' is protected and only accessible within class 'Human' and its subclasses.
// human.name = "SB";

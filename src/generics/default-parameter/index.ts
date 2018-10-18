interface IGreetingProps {
  name: string;
}

class Greeting extends React.Component<IGreetingProps, any> {
  public render(): string {
    return 'This is a fake React component';
  }
}

const greeting = new Greeting();
console.log(greeting.render());

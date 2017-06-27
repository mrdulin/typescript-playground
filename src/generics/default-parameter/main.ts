/**
 * Created by dulin on 2017/6/27.
 */


interface GreetingProps{
  name: string;
}

class Greeting extends React.Component<GreetingProps, any>{
  public render(): string {
    return 'This is a fake React component';
  }  
}

const greeting = new Greeting();
console.log(greeting.render());



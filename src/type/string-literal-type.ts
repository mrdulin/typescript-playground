/**
 * Created by dulin on 2017/6/21.
 */
// --- 字符串字面量类型 ---

//字符串字面量类型允许你指定字符串必须的固定值。 在实际应用中，字符串字面量类型可以与联合类型，类型保护和类型别名很好的配合。 
//通过结合使用这些特性，你可以实现类似枚举类型的字符串。
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {

    }
    else if (easing === "ease-out") {
    }
    else if (easing === "ease-in-out") {
    }
    else {
      // error! should not pass null or undefined.
    }
  }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");

//你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误。
// button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here


interface GameStateBarState {
  gameState: '' | 'X wins' | '0 wins' | 'Draw';
}

interface GameProps {
  name: string;
}

class MyComponent<GameProps, GameStateBarState>{
  public state: GameStateBarState;
  public props: GameProps;

  constructor(props: GameProps) {
    console.log(props);
  }

}

const comp = new MyComponent<GameProps, GameStateBarState>({ name: 'novaline' });






/**
 * Created by dulin on 2017/6/20.
 */
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

padLeft("Hello world", 4); // returns "    Hello world"

let indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错


// --- 联合类型 --- 

function padLeftV2(value: string, padding: number | string): string {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

let indentedStringV2 = padLeftV2("Hello world", true); // 编译阶段报错


// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

function getSmallPet(): Fish | Bird {
  return {
    swim(): void {
    },
    fly(): void {
    },
    layEggs(): void {
    }
  };
}

const pet = getSmallPet();
pet.swim();
pet.fly();
pet.layEggs();

// --- 类型断言 ---

//可以让上面的代码正常工作
if ((<Fish>pet).swim) {
  (<Fish>pet).swim();
} else if ((<Bird>pet).fly) {
  (<Bird>pet).fly();
}
//这里可以注意到我们不得不多次使用类型断言。 假若我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet的类型的话就好了。
//TypeScript里的类型保护机制让它成为了现实。 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 
//要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：

function isFish(pet: Fish | Bird): pet is Fish {
  return (<Fish>pet).swim !== undefined;
}
//在这个例子里，pet is Fish就是类型谓词。 谓词为 parameterName is Type这种形式，parameterName必须是来自于当前函数签名里的一个参数名。

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
//注意TypeScript不仅知道在if分支里pet是Fish类型； 它还清楚在 else分支里，一定不是Fish类型，一定是Bird类型。







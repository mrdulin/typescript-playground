/**
 * 要使用字符串索引签名，我们首先要确定这个对象可能具有某些作为特殊用途使用的额外属性。
 * 如果SquareConfig上带有定义的类型color和width, 还会带有任意数量的其他属性，那么我们可以这样来写SquareConfig接口:
 */
interface SquareConfig {
  color ? : string;
  width ? : number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {
  color: string,
  area: number
} {

  const area: number = config.width ? Math.pow(config.width, 2) : 0;

  return {
    color: config.color || 'red',
    area
  }
}

console.log(createSquare({
  colour: "red",
  width: 100,
  extraData1: 'emilie',
  extraData2: 'I like her'
}));


// --- 可索引类型 ---

// 定义一个索引类型为数字，索引返回值为字符串的索引类型
interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ['novaline', 'emily'];
const str: string = arr[0];
//我们定义了StringArray接口，它具有索引签名。 这个索引签名表示了当用number去索引StringArray时会得到string类型的返回值。


// --- 只读索引 ---

//可以将索引签名设置为只读，这样就防止了给索引赋值
interface ReadonlyStringArray {
  readonly[index: number]: string;
}

const arr1: ReadonlyStringArray = ['emilie', 'ouba'];
// arr1[2] = 'react';

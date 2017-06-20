/**
 * 要使用字符串索引签名，我们首先要确定这个对象可能具有某些作为特殊用途使用的额外属性。
 * 如果SquareConfig上带有定义的类型color和width, 还会带有任意数量的其他属性，那么我们可以这样来写SquareConfig接口:
 */
interface SquareConfig{
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  
  const area: number = config.width ? Math.pow(config.width, 2) : 0;
  
  return {
    color: config.color || 'red',
    area
  }
}

console.log(createSquare({ colour: "red", width: 100, extraData1: 'emilie', extraData2: 'I like her' }));

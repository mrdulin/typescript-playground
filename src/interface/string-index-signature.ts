interface SquareConfig{
  color?: string;
  width?: number;
  [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string, area: number} {
  return {
    color: config.color || 'red',
    area: Math.pow(config.width, 2)
  }
}

console.log(createSquare({ colour: "red", width: 100, extraData1: 'emilie', extraData2: 'I like her' }));

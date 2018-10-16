const addV1 = (x: number, y: number): number => x + y;

// 定义函数类型，包括接收的参数类型和返回值类型
let addV2: (x: number, y: number) => number;
// 赋值函数
addV2 = (x: number, y: number) => x + y;

const addV3: (x: number, y: number) => number = (x: number, y: number) => x + y;

const result = [addV1(1, 2), addV2(1, 2), addV3(1, 2)];

for (const r of result) {
  console.log(r);
}

export {};

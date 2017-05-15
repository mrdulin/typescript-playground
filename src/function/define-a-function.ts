const add_v1 = (x: number, y: number) :number => x + y;

//定义函数类型，包括接收的参数类型和返回值类型
let add_v2: (x: number, y: number) => number;
//赋值函数
add_v2 = (x: number, y: number) => x + y;

const add_v3: (x: number, y: number) => number = (x: number, y: number) => x + y;

const result = [
  add_v1(1,2),
  add_v2(1,2),
  add_v3(1,2)
];

for(let r of result) {
  console.log(r);
}

// 函数参数解构并类型注解

// 下面pretty的类型注解方式，错误的方式
// function toJSON(value: any, {pretty: boolean}) {
//   const indent: number = pretty ? 4 : 0;
//   return JSON.stringify(value, null, indent);
// }

function toJSON(value: any, {pretty}: {pretty: boolean}) {
  const indent: number = pretty ? 4 : 0;
  return JSON.stringify(value, null, indent);
}

//toJSON_v1的第二个参数中pretty字段是可选的, 第二个参数必须存在，如果pretty字段不存在，则pretty被设置为默认值true
function toJSON_v1(value: any, {pretty = true}: {pretty?: boolean}) {
  const indent: number = pretty ? 4 : 0;
  return JSON.stringify(value, null, indent);
}

//toJSON_v2的第二个参数是可选的，第二个参数如果不存在，则第二个参数被设置为默认值{}, 该默认值{}解构赋值, 又因为pretty字段不存在，所以pretty被设置为默认值true
function toJSON_v2(value: any, {pretty = true}: {pretty?: boolean} = {}) {
  const indent: number = pretty ? 4 : 0;
  return JSON.stringify(value, null, indent);
}

const her = {name: 'emilie', age: 26};
console.log(toJSON(her, {pretty: true}));

console.log('------ toJSON_v1 start ------');
console.log(toJSON_v1(her, {}));
// 注意：是toJSON_v1的第二个参数对象中pretty字段是可选的，并不是第二个参数是可选的
// console.log(toJSON_v1(her));
console.log('------ toJSON_v1 end ------');

console.log('------ toJSON_v2 start ------');
console.log(toJSON_v2(her));
console.log(toJSON_v2(her, {}));
console.log(toJSON_v2(her, {pretty: false}));
console.log('------ toJSON_v2 end ------');

//但是当这样的函数参数变得特别多的时候，如果还这样依次写，显得不是很灵活，好的方式是创建一个interface（接口）
interface SerializerSettings{
  pretty?: boolean;
}

function toJSON_v4(value: any, {pretty = true}: SerializerSettings = {}) {
  const indent: number = pretty ? 4 : 0;
  return JSON.stringify(value, null, indent);
}

console.log('------ toJSON_v4 start ------');
console.log(toJSON_v4(her));
console.log(toJSON_v4(her, {}));
console.log(toJSON_v4(her, {pretty: false}));
console.log('------ toJSON_v4 end ------');


function fn_v1(opt: {name: string}) {
  console.log(opt.name);
}

fn_v1({name: 'emilie'});

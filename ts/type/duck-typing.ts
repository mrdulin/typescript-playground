// -- 鸭式辩型 --

namespace duckTyping {
  let complexType = { id: 1, name: 'novaline' };

  // Error:(8, 3) TS2322:Type '{ id: number; }' is not assignable to type '{ id: number; name: string; }'. Property 'name' is missing in type '{
  // id: number; }'.

  // `ts`利用鸭式辩型来保证类型安全，下面的例子，任何赋值给complexType变量的值都必须具有id和name属性
  complexType = { id: 2 };
  complexType = { name: 'extraproperty', id: 2, extraProp: true };

  // 绕过上面的类型检查，使用类型断言
  let item1 = <any>{ id: 1, name: 'item 1' };
  item1 = { id: 2 };
}

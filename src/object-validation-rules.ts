/**
 * Created by elsa on 2017/7/9.
 */
function validate(value: any) {
  if (!value.first) {
    return false;
  }
  if (!value.last) {
    return false;
  }
  return true;
}

validate({ first: 'Bruce', last: 'wayne' });

// 这个函数可以正常工作。然而，需要考虑一个这样的场景：有很多种形式需要应用验证，而且不同领域有不同规则。在运行时很难创建一个通用的验证功能。

interface IValidationRules {
  required?: boolean;
}

interface IStringOfAny {
  [index: string]: any
}

const validationSchema: IStringOfAny = {
  first: {
    required: true
  },
  last: {
    required: true
  }
};

function valdateV2(schema: IStringOfAny, value: IStringOfAny) {
  for (const field in schema) {
    if (schema[field].required) {
      if (!value[field]) {
        return false;
      }
    }
  }
  return true;
}

console.log(valdateV2(validationSchema, { first: 'Bruce' })); // false
console.log(valdateV2(validationSchema, { first: 'Bruce', last: 'Wayne' })); // true

export default valdateV2;



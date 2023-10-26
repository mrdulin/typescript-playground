import { z } from 'zod';

enum TaxType {
  INCLUSIVE = 'INCLUSIVE',
  EXCLUSIVE = 'EXCLUSIVE',
}

export const taxTypeArray = [
  { value: TaxType.INCLUSIVE, label: '外税' },
  { value: TaxType.EXCLUSIVE, label: '内税' },
];

export const taxType = z.nativeEnum(TaxType);

console.log(taxType.parse(TaxType.EXCLUSIVE));
console.log(taxType.parse('EXCLUSIVE'));

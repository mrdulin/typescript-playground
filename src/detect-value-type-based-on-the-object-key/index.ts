export interface CounterState {
  id: string;
  status: 'idle' | 'loading' | 'failed';
  email: string;
  password: string;
}

type UpdateFieldObject<T> = {
  [K in keyof T]: {
    fieldName: K;
    value: T[K];
  };
}[keyof T];

type T = UpdateFieldObject<CounterState>;

const t0: T = {fieldName: 'id', value: '1'};
const t1: T = {fieldName: 'status', value: 'idle'};
const t2: T = {fieldName: 'email', value: 'example@gmail.com'};
const t3: T = {fieldName: 'password', value: '123456'};

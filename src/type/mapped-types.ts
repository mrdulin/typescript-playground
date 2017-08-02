/**
 * Created by dulin on 2017/7/7.
 */

namespace mappedTypes {
  interface IProps {
    name: string;
    age: number;
  }

  const me: IProps = {
    name: 'steam',
    age: 12
  };
  
  me.name = 'sbeam';
  
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  type IPropsReadOnly = Readonly<IProps>;
  
  const he: IPropsReadOnly = {
    name: 'react',
    age: 4
  };
  
  // he.name = 'angular';
}


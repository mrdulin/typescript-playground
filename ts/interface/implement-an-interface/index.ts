import { IPrint } from './@types';

// 不关心a是哪个类，只关心a是否实现了IPrint接口
function print(ins: IPrint) {
  ins.print();
}
export { print };

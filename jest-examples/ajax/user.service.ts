import request from './request';
import User from './models/User';

export function getUserName(userId: number): Promise<any> {
  return request('/users/' + userId).then((user: User): string => user.name);
}



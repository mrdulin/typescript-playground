import request from './request';

export function getUserName(userId) {
  return request('/users/' + userId).then(user => user.name);
}



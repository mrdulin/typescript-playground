class UserService {
  private static users: UserService.IUser[] = [];
  public add(user: UserService.IUser) {
    UserService.users.push(user);
  }

  public getAll(): UserService.IUser[] {
    return UserService.users;
  }
}

namespace UserService {
  export interface IUser {
    name: string;
    email: string;
  }

  export interface IUserServiceOpts {}

  export enum UserType {
    A,
    B,
    C
  }
}

export { UserService };

declare class UserService {
    private static users;
    add(user: UserService.IUser): void;
    getAll(): UserService.IUser[];
}
declare namespace UserService {
    interface IUser {
        name: string;
        email: string;
    }
    interface IUserServiceOpts {
    }
    enum UserType {
        A = 0,
        B = 1,
        C = 2
    }
}
export { UserService };

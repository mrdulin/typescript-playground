"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.add = function (user) {
        UserService.users.push(user);
    };
    UserService.prototype.getAll = function () {
        return UserService.users;
    };
    UserService.users = [];
    return UserService;
}());
exports.UserService = UserService;
(function (UserService) {
    var UserType;
    (function (UserType) {
        UserType[UserType["A"] = 0] = "A";
        UserType[UserType["B"] = 1] = "B";
        UserType[UserType["C"] = 2] = "C";
    })(UserType = UserService.UserType || (UserService.UserType = {}));
})(UserService || (UserService = {}));
exports.UserService = UserService;

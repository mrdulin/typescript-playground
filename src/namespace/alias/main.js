/**
 * Created by elsa on 2017/6/26.
 */
var app;
(function (app) {
    var validation;
    (function (validation) {
        var UserValidation = (function () {
            function UserValidation() {
            }
            return UserValidation;
        }());
        validation.UserValidation = UserValidation;
        var TalkValidation = (function () {
            function TalkValidation() {
            }
            return TalkValidation;
        }());
        validation.TalkValidation = TalkValidation;
    })(validation = app.validation || (app.validation = {}));
})(app || (app = {}));
/**
 * Created by elsa on 2017/6/26.
 */
// namespace app{
//   export namespace models{
//     export class UserModel{
//      
//     }
//    
//     export class TalkModel{
//      
//     }
//   }
// }
//命名空间可以包含点号。结果和上面一样
var app;
(function (app) {
    var models;
    (function (models) {
        var UserModel = (function () {
            function UserModel() {
            }
            return UserModel;
        }());
        models.UserModel = UserModel;
        var TalkModel = (function () {
            function TalkModel() {
            }
            return TalkModel;
        }());
        models.TalkModel = TalkModel;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
/**
 * Created by elsa on 2017/6/26.
 */
///<reference path="./validation.ts"/>
///<reference path="./model.ts"/>
//即使命名空间models和validation在两个不同的文件中，也可以在第三个文件中同时访问它们。
var user = new app.models.UserModel();
var talk = new app.models.TalkModel();
var userValidator = new app.validation.UserValidation();
//除了以下这种方式
// const talkValidator = new app.validation.TalkValidation();
//可以使用import关键字在内部模块中为另一个模块提供别名
var TalkValidatorAlias = app.validation.TalkValidation;
var talkValidator = new TalkValidatorAlias();

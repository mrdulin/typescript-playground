/**
 * Created by elsa on 2017/6/26.
 */

///<reference path="./validation.ts"/>
///<reference path="./model.ts"/>

//即使命名空间models和validation在两个不同的文件中，也可以在第三个文件中同时访问它们。

const user = new app.models.UserModel();
const talk = new app.models.TalkModel();

const userValidator = new app.validation.UserValidation();

//除了以下这种方式
// const talkValidator = new app.validation.TalkValidation();
//可以使用import关键字在内部模块中为另一个模块提供别名
import TalkValidatorAlias = app.validation.TalkValidation;
const talkValidator = new TalkValidatorAlias();


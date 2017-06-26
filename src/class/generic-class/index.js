/**
 * Created by elsa on 2017/6/26.
 */
//范型类能够帮助我们避免重复代码
var GenericClass;
(function (GenericClass) {
    var User = (function () {
        function User() {
        }
        User.prototype.isValid = function () {
            // user validation
            return true;
        };
        return User;
    }());
    var Talk = (function () {
        function Talk() {
        }
        Talk.prototype.isValid = function () {
            //talk validation
            return true;
        };
        return Talk;
    }());
    var GenericRepository = (function () {
        function GenericRepository(url) {
            this._url = url;
        }
        GenericRepository.prototype.getAsync = function () {
            var dfd = $.Deferred();
            $.ajax({
                url: this._url,
                type: 'GET',
                dataType: 'json'
            }).then(function (data) {
                // const list: T[] = data.items;
                // dfd.resolve(list);
                //添加数据验证逻辑
                // const dataList: T[] = [];
                // const items: T[] = data.items;
                // for(let item of items) {
                //
                //下面这种方式的缺点：
                //每增加一个实例，都要修改GenericRepository类，增加额外的逻辑，范型类不应该知道范型的类型
                //   if(item instanceof User) {
                //     //validate user
                //   }
                //   if(item instanceof Talk) {
                //     //validate Talk
                //   }
                // }
                //一个更好的解决方案是给获取的实例增加一个isValid方法
                //遵循了SOLID原则中得开/闭原则，可以在GenericRepository类正常工作的情况下增加一个新的实例（对扩展开放），
                //但是不需要额外的修改代码（对已有的修改封闭）。
                //还有一点需要注意，并不是所有类型都有isValid方法，所以需要进行范型约束，对类型进行约束。
                var list = [];
                var items = data.items;
                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                    var item = items_1[_i];
                    if (item.isValid()) {
                        list.push(item);
                    }
                }
                dfd.resolve(list);
            })["catch"](function (jqXHR, textStatus, error) {
                dfd.reject(error);
            });
            return dfd.promise();
        };
        return GenericRepository;
    }());
    var userRepository = new GenericRepository('./users.json');
    userRepository.getAsync().then(function (users) {
        console.log(users);
    })["catch"](function (e) {
        console.error(e);
    });
    var talkRepository = new GenericRepository('./talks.json');
    talkRepository.getAsync().then(function (talks) {
        console.log(talks);
    })["catch"](function (e) {
        console.error(e);
    });
    new GenericRepository('./sdsd');
})(GenericClass || (GenericClass = {}));

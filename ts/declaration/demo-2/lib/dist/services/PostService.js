"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PostService = /** @class */ (function () {
    function PostService(opts) {
    }
    PostService.prototype.add = function (post) {
        PostService.posts.push(post);
    };
    PostService.prototype.getAll = function () {
        return PostService.posts;
    };
    PostService.posts = [];
    return PostService;
}());
exports.PostService = PostService;
(function (PostService) {
    var PostType;
    (function (PostType) {
        PostType[PostType["A"] = 0] = "A";
        PostType[PostType["B"] = 1] = "B";
        PostType[PostType["C"] = 2] = "C";
    })(PostType = PostService.PostType || (PostService.PostType = {}));
})(PostService || (PostService = {}));
exports.PostService = PostService;

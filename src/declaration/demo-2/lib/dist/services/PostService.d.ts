declare class PostService {
    private static posts;
    constructor(opts: PostService.IPostServiceOpts);
    add(post: PostService.IPost): void;
    getAll(): PostService.IPost[];
}
declare namespace PostService {
    interface IPost {
        title: string;
    }
    interface IPostServiceOpts {
    }
    enum PostType {
        A = 0,
        B = 1,
        C = 2
    }
}
export { PostService };

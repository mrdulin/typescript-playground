class PostService {
  private static posts: PostService.IPost[] = [];
  constructor(opts: PostService.IPostServiceOpts) {}

  public add(post: PostService.IPost) {
    PostService.posts.push(post);
  }

  public getAll(): PostService.IPost[] {
    return PostService.posts;
  }
}

namespace PostService {
  export interface IPost {
    title: string;
  }

  export interface IPostServiceOpts {}

  export enum PostType {
    A,
    B,
    C
  }
}

export { PostService };

export interface Post {
  id: string;
  title: string;
  body: string;
}

export interface GetPostsData {
  posts: {
    data: Post[];
  };
}

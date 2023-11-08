import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query myProfile {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        title
        description
        image
      }
    }
  }
`;

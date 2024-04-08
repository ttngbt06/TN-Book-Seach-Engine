const typeDefs = `
  input BookInput {
  bookId: String!
  authors: [String]
  description: String!
  title: String!
  image: String
  link: String
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    savedBooks: [Book!]!
  }

  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(book: BookInput!): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allAuthors: [Author!]! 
    author(id: ID!): Author!
    allBooks: [Book!]!
    book(id: ID!): Book!

  }
  type Mutation{
    addAuthor(input: AddAuthorInput!): Author!
    addBook(input: AddBookInput!): Book!
    addPublisher(input: AddPublisherInput!): Publisher!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    age: Int
    numBooksPublished: Int
    address: [Address!]
  }
  input AddAuthorInput {
    firstName: String!
    lastName: String!
    email: String!
    age: Int
    numBooksPublished: Int
    address: AddressInput!
  }
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int
    bestseller: Boolean 
    author: [Author!]!
    publisher: [Publisher!]!
  }
  input AddBookInput {
    title: String!
    language: String!
    numPages: Int
    bestseller: Boolean 
    author: AddAuthorInput!
    publisher: AddPublisherInput!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String
    numBooksPublished: Int 
    address: [Address!]
  }
  input AddPublisherInput {
    company: String!
    phoneNumber: String
    numBooksPublished: Int 
    address: AddressInput!
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }
  input AddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`

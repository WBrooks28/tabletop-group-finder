const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Game {
    _id: ID
    name: String
    description: String
    duration: String
    playerLimit: String
    date: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    games: [Game]
    game(_id: ID!): Game
    user: User
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth

    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    addGame(
      name: String!
      description: String!
      duration: String!
      playerLimit: String
      date: String
    ): Game

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Game {
    _id: ID
    name: String
    description: String
    duration: String
    playerLimit: String
    date: String
    system: String
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
    users: [User]
  }

  type Mutation {
    addGame(
      name: String!
      description: String!
      duration: String!
      playerLimit: String!
      date: String!
      system: String!
    ): Game

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

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

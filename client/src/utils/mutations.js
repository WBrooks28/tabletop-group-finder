import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_GAME = gql`
  mutation addGame(
    $name: String!
    $description: String!
    $duration: String!
    $playerLimit: String!
    $date: String!
    $system: String!
  ) {
    addGame(
      name: $name
      description: $description
      duration: $duration
      playerLimit: $playerLimit
      date: $date
      system: $system
    )
  }
`
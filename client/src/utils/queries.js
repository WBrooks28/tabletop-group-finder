import { gql } from "@apollo/client";

export const QUERY_GAME = gql`
  query getGame($id: ID!) {
    game(_id: $id) {
      _id
      name
      description
      duration
      playerLimit
      date
      system
    }
  }
`;

export const QUERY_GAMES = gql`
  {
    games {
      _id
      name
      description
      duration
      playerLimit
      date
      system
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;

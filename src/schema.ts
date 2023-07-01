export const typeDefs = `#graphql
    """
    A Game type i guess
    """
  type Game{
    "unique id for the game"
    id: ID!,
    title: String!,
    platform: [String!]!,
    
  }
  "a review for a game"
  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
  }
  "an author of a review"
  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
  }
  
  type Query {
    reviews: [Review],
    games: [Game],
    authors: [Author],
  }

`

export const typeDefs = `#graphql
    """
    A Game type i guess
    """
  type Game{
    "unique id for the game"
    id: ID!,
    title: String!,
    platform: [String!]!,
    "a list of reviews for the game"
    reviews: [Review!],
  
    
  }
  "a review for a game"
  type Review {
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!,
    author: Author!,
  }
  "an author of a review"
  type Author {
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review!],
  }
  
  type Query {
    reviews: [Review],
    review(id: ID!): Review,
    games: [Game],
    game(id: ID!): Game,
    authors: [Author],
    author(id: ID!): Author,
  }

`

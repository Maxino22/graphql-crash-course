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

  type Mutation {
    addGame(game: GameInput!): Game,
    deleteGame(id: ID!): [Game],
    addReview(review: ReviewInput!): Review,
    deleteReview(id: ID!): [Review],
    addAuthor(author: AuthorInput!): Author,
    deleteAuthor(id: ID!): [Author],
  }
  input GameInput{
    title: String!,
    platform: [String!]!,
  
  }

  input ReviewInput{
    rating: Int!,
    content: String!,
    game: ID!,
    author: ID!,
  }

  input AuthorInput{
    name: String!,
    verified: Boolean!,
    reviews: [ID!],
  }

`

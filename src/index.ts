import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import _db from './_db.js'

const resolvers = {
	Query: {
		games() {
			return _db.games
		},

		game(_, args) {
			return _db.games.find((game) => game.id === args.id)
		},
		reviews() {
			return _db.reviews
		},
		review(_, args) {
			return _db.reviews.find((review) => review.id === args.id)
		},
		authors() {
			return _db.authors
		},

		author(_, args) {
			return _db.authors.find((author) => author.id === args.id)
		},
	},

	Game: {
		reviews(parent) {
			return _db.reviews.filter((review) => review.game_id === parent.id)
		},
	},

	Author: {
		reviews(parent) {
			return _db.reviews.filter((review) => review.author_id === parent.id)
		},
	},
	Review: {
		author(parent) {
			return _db.authors.find((author) => author.id === parent.author_id)
		},
		game(parent) {
			return _db.games.find((game) => game.id === parent.game_id)
		},
	},
	Mutation: {
		deleteGame(_, args) {
			_db.games = _db.games.filter((game) => game.id !== args.id)
			return _db.games
		},
		addAuthor(_, args) {
			let author = {
				...args.author,
				id: _db.authors.length + 1,
			}

			_db.authors.push(author)
			return author
		},
		deleteAuthor(_, args) {
			_db.authors = _db.authors.filter((author) => author.id !== args.id)
			return _db.authors
		},

		addReview(_, args) {
			let review = {
				...args.review,
				id: _db.reviews.length + 1,
			}
			_db.reviews.push(review)
			return review
		},

		addGame(_, args) {
			let game = {
				...args.game,
				id: _db.games.length + 1,
			}
			_db.games.push(game)
			return game
		},
	},
}
const server = new ApolloServer({
	typeDefs,
	resolvers,
	//resolver
})

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
})

console.log(`🚀  Server ready at: ${url}`)

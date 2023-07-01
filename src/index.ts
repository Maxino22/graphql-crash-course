import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import _db from './_db.js'

const resolvers = {
	Query: {
		games() {
			return _db.games
		},
		reviews() {
			return _db.reviews
		},
		authors() {
			return _db.authors
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

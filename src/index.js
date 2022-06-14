import { ApolloServer, gql } from "apollo-server"
// import { products, categories, reviews } from "./data.js"
import { typeDefs } from "./schema.js"
import { Category } from "./resolvers/Category.js"
import { Query } from "./resolvers/Query.js"
import { Product } from "./resolvers/Product.js"
import { Mutation } from "./resolvers/Mutation.js"
import db from "./data.js"

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation
  },
  context: {
    db
  }
})

server.listen().then(({ url }) => {
  console.log(`server running on ${url}`)
})
import { gql } from "apollo-server"

const typeDefs = gql`
type Query {
  hello: String
  products(filter: productFilter): [Product!]!
  product(id: ID!): Product
  categories: [Category!]!
  category(id: ID!): Category
}
type Mutation {
  addCategory(input: categoryInput): Category!
  addReview(input: reviewInput): Review!
  addProduct(input: productInput): Product!
  deleteCategory(id: ID!): Boolean!
  updateCategory(id: ID!, input: updateCategoryInput): Category!
}

type Product {
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  category: Category
  reviews: [Review!]!
}
type Category {
  id: ID!
  name: String!
  products(filter: productFilter): [Product!]!
}
type Review {
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating: Int!
}

input productFilter {
  onSale: Boolean
  avgRating: Int
}

input categoryInput {
  name: String!
}
input updateCategoryInput {
  name: String
}
input reviewInput {
  date: String!,
  title: String!,
  comment: String!
  rating: Int!
  productId: ID!
}

input productInput {
  name: String!
  description: String!
  quantity: Int!
  image: String!
  price: Float!
  onSale: Boolean!
  categoryId: String!
}



`
export { typeDefs }
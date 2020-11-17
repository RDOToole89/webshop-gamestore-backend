const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: Int!
    productName: String
    description: String
    imgUrl: String
    supplierId: Int
    categoryId: Int
    unit: Int
    price: Float
  }

  type Mutation {
    createProduct(
      productName: String
      description: String
      imgUrl: String
      supplierId: Int
      categoryId: Int
      unit: Int
      price: Float
    ): Product!
  }

  type User {
    id: Int!
    firstName: String
    lastName: String
    email: String
    password: String
    phone: String
    address: String
    city: String
    postalcode: String
    country: String
    isAdmin: Boolean
    newsletter: Boolean
  }

  type Query {
    products: [Product]
    users: [User]
  }
`;

module.exports = { typeDefs };

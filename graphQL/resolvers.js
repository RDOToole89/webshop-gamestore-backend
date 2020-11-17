const resolvers = {
  Query: {
    async products(parent, args, { db }, info) {
      return await db.product.findAll();
    },
  },
  Mutation: {
    async createProduct(parent, { ...args }, { db }, info) {
      console.log(args);
      return await db.Product.create({ ...args });
    },
  },
};

module.exports = { resolvers };

// mutation {
//   createProduct(
//     productName: "jdajhad"
//     description: "fsfsfs"
//     imgUrl: "sjkfsjksf"
//     supplierId: 1
//     categoryId: 1
//     unit: 1
//     price: 1.5
//   ) {
//     productName
//     description
//     imgUrl
//     supplierId
//     categoryId
//     unit
//   	price
//     }
//   }

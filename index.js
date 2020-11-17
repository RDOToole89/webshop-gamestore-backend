const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
// const orderRouter = require("./routers/orderRouter");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");

// APOLLO SERVER
const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./graphQL/schema");
const { resolvers } = require("./graphQL/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ req, db }) });

const url = `http://localhost:4000/graphQL`;

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

//MiddleWares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS

// app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/login", authRouter);

const PORT = 4001;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

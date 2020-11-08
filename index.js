const express = require("express");
const app = express();
const cors = require("cors");
// const orderRouter = require("./routers/orderRouter");
const authRouter = require("./routers/authRouter");
const productRouter = require("./routers/productRouter");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS

// app.use("/orders", orderRouter);
app.use("/products", productRouter);
app.use("/login", authRouter);

const PORT = 4000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

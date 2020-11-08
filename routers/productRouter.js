const { Router } = require("express");
const Product = require("../models").product;
const ProductComment = require("../models").productComment;

const User = require("../models").user;
console.log("PRODUCTCOMMENT", ProductComment);
console.log("PRODUCTMODEL", Product);

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id, { include: [ProductComment] });
    res.json(product);
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  const product = req.body;

  try {
    const newProduct = await Product.create(product);
    res.json(newProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;

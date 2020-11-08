const express = require("express");
const app = express();
const { Router, urlencoded } = require("express");

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  console.log(req.body);
  console.log("Root route has been reached!");

  res.json({ hello: "world" });
});

const PORT = 4000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

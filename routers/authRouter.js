const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models/").user;

const router = new Router();

router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).send(`Bad request, please provide a valid email and password.`);
    }

    try {
      const foundUser = await User.findOne({ where: { email: email } });
      // console.log(foundUser.get({ plain: true }));

      if (!foundUser) {
        return res.status(404).send("No user with provided email was found.");
      }

      const token = toJWT({
        userId: foundUser.id,
        name: foundUser.firstName,
        email: foundUser.email,
      });
      // console.log("TOKEN", token);

      const checkedToken = toData(token);
      // console.log("What is in stored token?", checkedToken);

      res.json({ token });
    } catch (e) {
      console.log(e);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/me", async (req, res, next) => {
  const { token } = req.body;

  const userData = toData(token);

  res.json({ ...userData });
});

module.exports = router;

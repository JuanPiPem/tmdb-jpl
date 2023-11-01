const express = require("express");

const { generateToken, validateToken } = require("../config/tokens");
const { validateAuth } = require("../middlewares/auth");
const router = express.Router();
const User = require("../db/models/user");

router.get("/users", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((error) => {
      res.status(404).send({ error: "No se pudieron obtener los usuarios." });
    });
});

router.post("/users/register", (req, res) => {
  User.create(req.body)

    .then((newUser) => {
      res.status(201).send(newUser);
    })

    .catch((error) => {
      res.status(404).send({ error: "No se pudo agregar el usuario." });
    });
});

router.post("/users/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        email: user.email,
        name: user.name,
        last_name: user.last_name,
      };

      const token = generateToken(payload);

      res.cookie("Holaaaa", token);

      res.send(payload);
    });
  });
});

// router.get("/users/secret", validateAuth, (req, res) => {
//   res.send(req.user);
// });

// router.get("users/me", validateAuth, (req, res) => {
//   res.send(req.user);
// });

// router.post("users/logout", (req, res) => {
//   res.clearCookie("token");

//   res.sendStatus(204);
// });

// router.get("/users/secret", (req, res) => {
//   const token = req.cookies.token;
//   const isValid = validateToken(token);

//   res.send(payload);
// });

module.exports = router;

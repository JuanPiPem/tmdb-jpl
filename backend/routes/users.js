const express = require("express");

const { generateToken, validateToken } = require("../config/token");

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
        lastname: user.lastname,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

module.exports = router;

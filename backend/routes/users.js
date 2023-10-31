const express = require("express");
const router = express.Router();

const User = require("../db/models/user");

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: "No se pudieron obtener los usuarios." });
    });
});

router.post("/", (req, res) => {
  const { name, last_name, email, password } = req.body;
  User.create({ name, last_name, email, password })
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((error) => {
      res.status(500).json({ error: "No se pudo agregar el usuario." });
    });
});

module.exports = router;

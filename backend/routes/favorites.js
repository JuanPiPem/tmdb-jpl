const express = require("express");
const router = express.Router();
const db = require("../db");
const Favorite = require("../db/models/favorites");
const User = require("../db/models/user");
const { validateAuth } = require("../middlewares/auth");

router.post("/add", (req, res) => {
  const movieId = req.body.movie_id;
  const userId = req.body.user_id;

  User.findByPk(userId).then((user) => {
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    Favorite.create({
      movie_id: movieId,
    })
      .then((isFavorite) => {
        return isFavorite.setUser(userId);
      })
      .then((resolve) => {
        res.send(resolve);
      });
  });
});

router.get("/list/:id", (req, res) => {
  const userId = req.params.id;

  Favorite.findAll({ where: { userId: userId } }).then((result) => {
    res.send(result);
  });
});

router.delete("/remove/:id", (req, res) => {
  Favorite.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => res.sendStatus(202));
});

module.exports = router;

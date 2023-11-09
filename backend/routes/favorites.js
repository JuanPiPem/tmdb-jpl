const express = require("express");
const router = express.Router();
const db = require("../db");
const Favorite = require("../db/models/favorites");
const User = require("../db/models/user");
const { validateAuth } = require("../middlewares/auth");

router.post("/add", (req, res) => {
  const { movie_id } = req.body;
  const { user_id } = req.body;
  console.log("FFFFFF", movie_id);
  console.log("XXXXXXX", user_id);
  User.findOne({ where: { id: user_id } }).then((user) => {
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    Favorite.create({
      movie_id: movie_id,
    })
      .then((isFavorite) => {
        return isFavorite.setUser(user_id);
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
  const movieId = req.params.id;
  Favorite.destroy({
    where: {
      movie_id: movieId,
    },
  }).then(() => res.sendStatus(202));
});

module.exports = router;

//  url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=ee44b5d16f40162e3be0b6811a5cc00e',
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");
// const { validateAuth } = require("../middlewares/auth");

// router.get("/top_rated", validateAuth, (req, res) => {
//   axios
//     .get(
//       "https://api.themoviedb.org/3/movie/550?api_key=ee44b5d16f40162e3be0b6811a5cc00e"
//     )
//     .then((response) => {
//       const movies = response.data.results;
//       console.log("Peliiiiis", movies);
//       res.status(200).json(movies);
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error al obtener películas populares");
//     });
// });

// module.exports = router;

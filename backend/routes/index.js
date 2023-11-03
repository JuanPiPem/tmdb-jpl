const express = require("express");
const router = express.Router();

const userRoutes = require("./users");
//const moviesRoutes = require("./movies");

router.use("/users", userRoutes);
//router.use("/movies", userRoutes);

module.exports = router;

// "name": "Mati",
// "last_name": "Mati",
// "email": "siete@example.com",
// "password": "siete"

const Sequelize = require("sequelize");

const db = new Sequelize("tmdbjpl", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

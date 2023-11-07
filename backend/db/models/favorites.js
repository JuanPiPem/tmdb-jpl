const { DataTypes, Model } = require("sequelize");
const db = require("../index");
const User = require("./user");

class Favorite extends Model {}

Favorite.init(
  {
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favorite" }
);

Favorite.belongsTo(User, {
  as: "user",
});

module.exports = Favorite;

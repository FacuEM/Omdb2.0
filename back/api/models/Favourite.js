const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Favourite extends Model {}

Favourite.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    poster: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "Fav",
  }
);

module.exports = Favourite;

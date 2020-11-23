const Favourite = require("./Favourite");
const User = require("./User");

Favourite.belongsTo(User);

module.exports = { Favourite, User };

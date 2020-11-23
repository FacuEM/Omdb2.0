const { Favourite } = require("../models/index");

const favouriteController = {
  //add a movie to favorites
  newFav(req, res) {
    Favourite.create({ title: req.body.title, poster: req.body.poster })
      .then((fav) => {
        const user = req.body.user;
        fav.setUser(user);
      })
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
  //brings all the favorite movies corresponding to a user
  allFavs(req, res) {
    Favourite.findAll({ where: { UserId: req.params.id } }).then((movies) =>
      res.send(movies)
    );
  },
  //remove a movie from favorites
  removeFav(req, res) {
    Favourite.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => res.sendStatus(204));
  },
};

module.exports = favouriteController;

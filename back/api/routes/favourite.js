const express = require("express");
const favouriteController = require("../controllers/favouriteController");
const router = express.Router();

//add a movie to favorites
router.post("/newFav", favouriteController.newFav);

//brings all the favorite movies corresponding to a user
router.get("/allFavs/:id", favouriteController.allFavs);

//remove a movie from favorites
router.delete("/removeFav/:id", favouriteController.removeFav);

module.exports = router;

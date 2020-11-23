const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//bring all users
router.get("/users", userController.users);

module.exports = router;

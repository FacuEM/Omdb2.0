const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const adminRoutes = require("./admin");
const favouriteRoutes = require("./favourite");

router.use("/auth", authRoutes);
router.use("/admin", adminRoutes);
router.use("/favourite", favouriteRoutes);

module.exports = router;

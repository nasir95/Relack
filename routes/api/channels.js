const express = require("express");
const router = express.Router();
const channelsCtrl = require("../../controllers/channels");
const mongoose = require("mongoose");

router.get("/", channelsCtrl.multipleChannels);
router.get("/:id", checkValid, channelsCtrl.multipleMessages);
router.use(require("../../config/auth"));
router.post("/", checkAuth, channelsCtrl.create);
router.post("/:id", channelsCtrl.messageCreate);

function checkAuth(req, res, next) {
  if (req.user) return next();
  res.status(401).json({ msg: "Not Authorized" });
}

function checkValid(req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).send("Invalid ID.");
  next();
}

module.exports = router;

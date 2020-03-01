const express = require("express");
const router = express.Router();
const channelsCtrl = require("../../controllers/channels");

router.get("/", channelsCtrl.channelName);
router.use(require("../../config/auth"));
router.post("/", checkAuth, channelsCtrl.create);

function checkAuth(req, res, next) {
  if (req.user) return next();
  res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;

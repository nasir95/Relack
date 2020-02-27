const express = require("express");

const router = express.Router();

const usersCtrl = require("../../controllers/users");

router.post("/Signup", usersCtrl.signup);

module.exports = router;

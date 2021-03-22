const express = require("express");
const router = express.Router();

const controller = require('./controller');

router.post("/siginin", controller.login);
router.post("/siginup", controller.registration);

module.exports = router;
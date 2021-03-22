const express = require("express");
const router = express.Router();
const task = require('../src/task/router');
const auth = require('../src/auth/router');

router.use("/task", task);
router.use("/auth", auth);

module.exports = router;
const express = require("express");
const router = express.Router();

const controller = require('./controller');
const { authGuard } = require('../../middleware/jwttoken')

router.get("/", controller.list);
router.post("/", [authGuard], controller.add);
router.put("/:id", [authGuard], controller.update);
router.delete("/:id", [authGuard], controller.delete);

module.exports = router;
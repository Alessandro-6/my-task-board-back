const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.route("/:taskId").put(controller.update).delete(controller.delete);

module.exports = router;

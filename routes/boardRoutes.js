const express = require("express");
const router = express.Router();
const controller = require("../controllers/boardController");

router.post("/", controller.create);

router
  .route("/:boardId")
  .get(controller.get)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;

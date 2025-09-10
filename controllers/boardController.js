const Board = require("../models/boardModel");

exports.get = async (req, res, next) => {
  try {
    const board = await Board.findById(req.params?.["boardId"]);

    if (!board) throw { code: 404, message: "Board not found" };

    console.log(req.params);

    res.status(200).json({ status: "success", data: board });
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ status: "failure", message: err.message });
  }
};

exports.create = async (req, res, next) => {
  try {
    if (!req.body?.name) throw { code: 400, message: "Please provide a name" };
    const board = new Board({
      name: req.body?.name?.trim(),
      description: req.body?.description?.trim(),
    });
    await board.save();

    res.status(201).json({ status: "success", data: board._id });
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ status: "failure", message: err.message });
  }
};

exports.update = async (req, res, next) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params?.["boardId"], {
      name: req.body?.name.trim(),
      description: req.body?.description.trim(),
    });

    if (!board) {
      const board = new Board({
        name: req.body.name,
        description: req.body.description,
      });

      await board.save();
      res.status(201).json({ status: "success" });
    } else res.status(200).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failure", message: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const board = await Board.findByIdAndDelete(req.params?.["boardId"]);

    if (!board) throw { code: 404, message: "Board not found" };
    res.status(200).json({ status: "success" });
  } catch (err) {
    console.log(err);

    res
      .status(err.code || 500)
      .json({ status: "failure", message: err.message });
  }
};

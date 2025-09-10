const Task = require("../models/taskModel");

exports.update = async (req, res, next) => {
  try {
    if (!req.body.boardId)
      throw { code: 400, message: "Please provide a boardId" };
    const task = await Task.findByIdAndUpdate(req.params?.["taskId"]);

    if (!task) {
      const task = new Task({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
        icon: req.body.icon,
        board: req.body.boardId,
      });

      await task.save();

      res.status(201).json({ status: "success" });
    } else res.status(200).json({ status: "success" });
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ status: "failure", message: err.message });
  }
};

exports.delete = async (req, res, next) => {
  try {
    const task = Task.findByIdAndDelete(req.params?.["taskId"]);
    if (!task) throw { code: 404, message: "Task not found" };
    res.status(200).json({ status: "success" });
  } catch (err) {
    res
      .status(err.code || 500)
      .json({ status: "failure", message: err.message });
  }
};

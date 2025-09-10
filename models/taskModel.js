const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  board: { type: Schema.Types.ObjectId, ref: "Board" },
  name: { type: String, required: true },
  description: String,
  icon: String,
  status: {
    type: String,
    enum: ["todo", "in-progress", "completed", "won't-do"],
    default: "todo",
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;

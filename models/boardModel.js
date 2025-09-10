const { Schema, model } = require("mongoose");

const boardSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Board = model("Board", boardSchema);

module.exports = Board;

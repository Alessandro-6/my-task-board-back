const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URI || "mongodb://127.0.0.1:27017/test"
    );
    console.log("Connected to mongo");
  } catch (err) {
    console.log(err.message);
  }
};

const express = require("express");
const app = express();
const dotenv = require("dotenv");

const dbStart = require("./db/MongoDB");

const boardRoute = require("./routes/boardRoutes");
const taskRoute = require("./routes/taskRoutes");

dotenv.config("./.env");

app.use(express.json());
app.use("/api/boards", boardRoute);
app.use("/api/tasks", taskRoute);

dbStart();

app.listen(process.env.PORT || 8000, process.env.HOST || "127.0.0.1", (err) => {
  if (err) console.log(`An error occurred: ${err.message}`);
  else console.log(`Listening requests on port ${process.env.PORT || 8000}`);
});

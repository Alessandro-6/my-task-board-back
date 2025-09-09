const express = require("express");
const app = express();

app.listen(process.env.PORT || 8000, process.env.HOST || "127.0.0.1", (err) => {
  if (!err) console.log(`An error occurred: ${err.message}`);
  else console.log(`Listening requests on port ${process.env.PORT || 8000}`);
});

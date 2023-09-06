const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server working successfully ");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.listen();

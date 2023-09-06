const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server working successfully ");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});

app.listen();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

app.use(cors()); // Use this after the variable declaration
require("dotenv/config");

app.use(bodyParser.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db");
});

app.listen(5000);

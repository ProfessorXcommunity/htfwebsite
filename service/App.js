const express = require("express");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({ extended: true }));
var cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
const User = require("./model/userSchema");
app.use(require("./router/auth"));
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
mongoose
  .connect(DB)
  .then(() => {
    console.log("our connection is successful");
  })
  .catch((err) => console.log("connection is failed"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, () => {
  console.log("server is running at port 5000");
});

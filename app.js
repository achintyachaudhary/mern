var express = require("express");

const router = require("./router");
const app = express();
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
app.use("", router);
app.listen(3000);

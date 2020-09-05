var express = require("express");
const mongo = require("./mongo_connect");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello world!");
  mongo.mongo_connector()
});

app.listen(3000);
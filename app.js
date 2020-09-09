var express = require("express");

const router = require("./router");
const app = express();
var mongoose = require("mongoose");
var morgan = require('morgan')


mongoose.connect("mongodb://localhost/mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}, function(){
  console.log('mongodb ready to serve');
});

app.use(morgan('dev'));
app.use("", router);

app.listen(3000);

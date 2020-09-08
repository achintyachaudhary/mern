var express = require("express");
var router = express.Router();
const logger = require("./app") 
router.get("/", function (req, res) {
  let x = 9/0 + 9;
  res.send("Hello world!");
});

//export this router to use in our index.js
module.exports = router;

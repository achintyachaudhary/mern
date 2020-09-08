var express = require("express");

const router = require("./router");
const app = express();
var mongoose = require("mongoose");
var morgan = require('morgan')


mongoose.connect("mongodb://localhost/my_database", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const winston = require('winston');
 
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'run/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'run/combined.log' }),
  ],
});

app.use(morgan('combined'));
app.use("", router);
module.exports = logger

app.listen(3000);

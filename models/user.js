const mongoose = require("mongoose");

const kittySchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

let Kitten = mongoose.model("Kitten", kittySchema);

module.exports = Kitten;

const Kitten = require("../models/user");

const get_users = function (req, res) {
  let x = 9 / 0 + 9;
  const silence = new Kitten({ name: "Silence" });
  silence.save((err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  console.log(silence.name);
  res.status(200).json("oh noes!");
};

const update_user = function (req, res) {
  const _id = req.params.id;
  Kitten.updateOne({ _id: _id }, { name: "trolls" }, (err, res) => {
    console.log(res);
  });
  res.status(200).json("oh noes!");
};
module.exports = {
  get_users,
  update_user,
};

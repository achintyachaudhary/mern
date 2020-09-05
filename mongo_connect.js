const { MongoClient } = require("mongodb");

var db = null; // global variable to hold the connection

const connector = function connect() {
  console.log("docs");
  MongoClient.connect(
    "mongodb://localhost:27017/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    function (err, client) {
      if (err) {
        console.error(err);
      }
      db = client.db("test_achintya"); // once connected, assign the connection to the global variable
      db.collection("user")
        .find({})
        .toArray(function (err, docs) {
          console.log(docs);
          if (err) {
            console.error(err);
          }
        });
    }
  );
};

module.exports = {
  mongo_connector: connector,
};

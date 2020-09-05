var http = require("http");

const { MongoClient } = require("mongodb");

http
  .createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end("Hello World\n");
    var db = null; // global variable to hold the connection

    MongoClient.connect("mongodb://localhost:27017/",{ useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
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
    });

    
      
    
  })
  .listen(8000);

// Console will print the message
console.log("Server running at http://127.0.0.1:8000/");

module.exports = function(app) {
  var bodyParser = require("body-parser");
  var data = require("../data/friends.js");

  // Sets up the Express app to handle data parsing
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get("/api/friends", function (req, res) {
    res.json(data);
  });

  // Search for Specific Character (or all characters) - provides JSON
  app.post("/api/friends", function (req, res) {
    var friendSeeker = req.body;
    console.log(req.body);

    // if (chosen) {
    //   console.log(chosen);

    //   for (var i = 0; i < characters.length; i++) {
    //     if (chosen === characters[i].routeName) {
    //       return res.json(characters[i]);
    //     }
    //   }
    //   return res.json(false);
    // }
    // return res.json(characters);
    res.send(friendSeeker);
  });
}

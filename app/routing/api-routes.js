module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    // res.json(characters);
    res.send("all the friends");
  });

  // Search for Specific Character (or all characters) - provides JSON
  app.post("/api/friends", function (req, res) {
    // var chosen = req.params.characters;

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
    res.end();
  });
}
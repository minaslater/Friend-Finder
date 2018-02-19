function totalDiff(array1, array2) {
  var totalDifference = 0;
  for(var j = 0; j < array1.length; j++) {
    totalDifference += Math.abs(array1[j] - array2[j]);
  }
  return totalDifference;
}

module.exports = function(app) {
  var data = require("../data/friends.js");

  app.get("/api/friends", function (req, res) {
    res.json(data);
  });

  // Search for Specific Character (or all characters) - provides JSON
  app.post("/api/friends", function (req, res) {
    var seekerData = JSON.parse(req.body.scores);
    var currentMatch = 0;
    var currentLowest = 20;
    
    for(var i = 0; i < data.length; i++) {
      var difference = totalDiff(data[i].scores, seekerData);
      if (difference < currentLowest) {
        currentLowest = difference;
        currentMatch = i;
      }
    }
    res.json(data[currentMatch]);
  });
}

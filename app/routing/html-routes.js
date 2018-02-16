module.exports = function(app) {

  app.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname, "home.html"));
    res.send("home");
  });

  app.get("/survey", function (req, res) {
    // res.sendFile(path.join(__dirname, "survey.html"));
    res.send("survey");
  });
}
module.exports = function(app) {
  app.get("/", function (req, res) {
    res.sendFile("home.html", {root: "./app/public"});
    // res.send("home");
  });

  app.get("/survey", function (req, res) {
    res.sendFile("/survey.html", {root: "./app/public"});
    res.send("survey");
  });
}
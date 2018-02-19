// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// console.log(data);

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Pulls in external routes
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

// Sets up to serve assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

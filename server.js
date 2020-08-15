// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
const EXPRESS = require("express");
const BODYPARSER = require("body-parser");
const PATH = require("path");
const EXPHBS = require("express-handlebars");

// Sets up the Express App
// =============================================================
const APP = EXPRESS();
const PORT = process.env.PORT || 9000;

const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");
const burger = require("./models/burgers");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
APP.use(BODYPARSER.urlencoded({ extended: true }));
// parse application/json
APP.use(BODYPARSER.json());

// Static directory
APP.use(EXPRESS.static(PATH.join(__dirname, "public")));

// Routes
// =============================================================
require("./routes")(APP);
// Import routes and give the server access to them.

// catch 404 and forward to error handler
APP.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Views
// ============================================================
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(() => {
  APP.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
// our module get's exported as app.
module.exports = APP;

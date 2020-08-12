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

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
APP.use(BODYPARSER.urlencoded({ extended: true }));
// parse application/json
APP.use(BODYPARSER.json());

// Static directory
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

// Routes
// =============================================================
require('./routes')(APP);
// Import routes and give the server access to them.

// catch 404 and forward to error handler
APP.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Views
// ============================================================
APP.engine("handlebars", EXPHBS({ defaultLayout: "main" }));
APP.set("view engine", "handlebars");

// Starts the server to begin listening
// =============================================================
APP.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// our module get's exported as app.
module.exports = APP;
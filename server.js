const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const db = require("./models");

const PORT = process.env.PORT || 8080;

// Start express server
const app = express();

// Serve static content from the public folder
app.use(express.static("public/assets"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Import handlebars
const exphbs = require("express-handlebars");
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes
const htmlRoutes = require("./controllers/html_routes.js");
const apiRoutes = require("./controllers/api_routes.js");

app.use(htmlRoutes);
app.use(apiRoutes);

//Listen on port
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require("../config/passport");
const { v4: uuidv4 } = require("uuid");
// Requiring path to so we can use relative routes to our HTML files

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    .then(() => {
      res.redirect(307, "/api/login");
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.post("/api/updateCredit", isAuthenticated, (req, res) => {
  credits = parseInt(req.body.credit);
  db.User.update(
    { credits: credits },
    {
      where: {
        id: req.body.userId
      }
    }
  )
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

router.post("/api/placeOrder", isAuthenticated, (req, res) => {
  db.Order.create({
    total: req.body.total,
    addressId: req.body.addressId,
    userId: req.body.userId,
    paid: req.body.paid,
    hash: uuidv4()
  })
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      id: req.user.id
    });
  }
});

// Create api route for add to cart

// Export routes for server.js to use.
module.exports = router;

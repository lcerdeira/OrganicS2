const express = require("express");
const router = express.Router();
const db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/login", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/assets/login.html"));
});

router.get("/signup", (req, res) => {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/assets/signup.html"));
});

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, "../public/assets/members.html"));
});

router.get("/grocery/:category", (req, res) => {
  const department = req.params.category;
  const departmentIds = {
    meat: 1,
    greens: 2,
    dairy: 3
  };

  const departmentId = departmentIds[department];

  const itemsArray = [];
  db.Product.findAll({
    where: {
      ProductCategoryId: departmentId
    },
    include: [db.ProductCategory]
  }).then(data => {
    data.forEach(element => {
      const itemSet = {};
      itemSet.id = element.dataValues.id;
      itemSet.itemName = element.dataValues.title;
      const formatPrice = parseFloat(element.dataValues.price).toFixed(2);
      itemSet.itemPrice = formatPrice;
      itemSet.itemUnit = element.dataValues.unit;
      itemSet.itemQuantity = 1;
      itemSet.itemCategory = element.dataValues.ProductCategory.category;
      itemsArray.push(itemSet);
    });
    myObj = {
      items: itemsArray
    };
    res.render("items", myObj);
  });
});

router.get("/checkoutAuth", (req, res) => {
  if (req.user) {
    res.redirect("/checkout");
  }
  res.sendFile(path.join(__dirname, "../public/assets/login.html"));
});

router.get("/checkout", isAuthenticated, (req, res) => {
  const userData = {};
  userData.id = req.user.id;

  db.User.findOne({
    where: {
      id: userData.id
    }
  }).then(data => {
    userData.email = data.email;
    userData.firstName = data.firstName;
    userData.lastName = data.lastName;
    userData.credits = data.credits;
    userData.authStatus = true;
    res.render("checkout", userData);
  });
});

router.get("/complete", (req, res) => {
  res.render("complete", {});
});
router.get("/", (req, res) => {
  const userData = {};
  // If the user already has an account send them to the members page
  if (req.user) {
    userData.authStatus = true;
  } else {
    userData.authStatus = false;
  }
  res.render("index", userData);
});

router.get("/shopping-cart", (req, res) => {
  const userData = {};
  if (req.user) {
    userData.authStatus = true;
  } else {
    userData.authStatus = false;
  }
  res.render("shopping-cart", userData);
});

router.get("/contact", (req, res) => {
  const userData = {};
  if (req.user) {
    userData.authStatus = true;
  } else {
    userData.authStatus = false;
  }
  res.render("contact", userData);
});

module.exports = router;

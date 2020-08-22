const express = require("express");
const router = express.Router();
const food = require("../models/food");
const db = require("../models");
const passport = require("../config/passport");
// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", (req, res) => {
  // If the user already has an account send them to the members page

  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/assets/index.html"));
});

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

// Main page
router.get("/food", isAuthenticated, (req, res) => {
  food.all((data) => {
    const foodObj = {
      food: data,
    };
    console.log(foodObj);
    res.render("index", foodObj);
  });
});

router.get("/grocery/:category", (req, res) => {
  let department = req.params.category;
  const departmentIds = {
    meat: 1,
    greens: 2,
    dairy: 3,
  };

  let departmentId = departmentIds[department];

  let itemsArray = [];
  db.Product.findAll({
    where: {
      ProductCategoryId: departmentId,
    },
    include: [db.Product_category],
  }).then((data) => {
    data.forEach((element) => {
      let itemSet = {};
      itemSet["item_name"] = element.dataValues.title;
      itemSet["item_price"] = element.dataValues.price;
      itemSet["item_unit"] = element.dataValues.unit;
      
      itemsArray.push(itemSet);
    });
    myObj = {
      items: itemsArray,
    };
    res.render("items", myObj);
  });
});

module.exports = router;

// ORM has the queries to the database for each case.
const orm = require("../config/orm.js");

let food = {
  all: (cb) => {
    orm.all("food", function(res) {
      cb(res);
    });
  },
  
  create: (columns, values, cb) => {
    orm.create("food", columns, values, function(res) {
      cb(res);
    });
  },
  update: (condition, cb) => {
    orm.update("food", condition, function(res) {
      cb(res);
    });
  }
};

// Export these functions for use in the controlller
module.exports = food;
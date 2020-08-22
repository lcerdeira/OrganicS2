// ORM has the queries to the database for each case.
const orm = require("../config/orm.js");

const food = {
  all: cb => {
    orm.all("food", res => {
      cb(res);
    });
  },

  create: (columns, values, cb) => {
    orm.create("food", columns, values, res => {
      cb(res);
    });
  },
  update: (condition, cb) => {
    orm.update("food", condition, res => {
      cb(res);
    });
  }
};

// Export these functions for use in the controlller
module.exports = food;

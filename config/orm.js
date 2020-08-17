const connection = require("../config/connection.js");

const insertQMarks = (count) => {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push("?");
  }
  return arr.toString();
};

// ORM with functions to Create, read and update
const orm = {
  all: (tableName, cb) => {
    const queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: (table, columns, values, cb) => {
    values[1] = false;
    let queryString =
      "INSERT INTO " +
      table +
      " (" +
      columns.toString() +
      ") VALUES (" +
      insertQMarks(values.length) +
      ") ";
    connection.query(queryString, values, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  update: (table, condition, cb) => {
    let queryString =
      "UPDATE " + table + " SET devoured = true WHERE " + condition;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;

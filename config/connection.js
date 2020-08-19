const mysql = require("mysql");
require("dotenv").config();
let connection;
if (process.env.JAWSDB_URL) {
  // If running on JAWSDB on heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
// If running locally
  connection = mysql.createConnection({
    //Environment variables from the .env file
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;

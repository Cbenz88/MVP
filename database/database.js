var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.SQL_HOST || 'localhost',
  user     : process.env.SQL_USER || 'root',
  password : process.env.SQL_PASS || '',
  database : process.env.SQL_DB || 'FEC'
});

connection.connect(err => {
  if (err) {
    console.log("Error connecting to database", err);
  } else {
    console.log("Database connection successful");
  }
});

module.exports = connection;

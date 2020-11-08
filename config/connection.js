// Preps for where to connect to
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.local_pw,
  database: "burgers_db",
});

// Makes the connection
connection.connect((err) => {
  if (err) {
    console.log("error conencting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Exports for the ORM to use
module.exports = connection;

// Preps for where to connect to
const mysql = require("mysql");
require("dotenv").config();

if (process.env.JAWSDB_URL) {
  const connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.local_pw,
    database: "burgers_db",
  });
}


// Makes the connection
connection.connect();

// Exports for the ORM to use
module.exports = connection;

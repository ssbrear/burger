// Preps for where to connect to
const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
  "use_env_variable": "JAWSDB_URL",
  "dialect": "mysql"
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

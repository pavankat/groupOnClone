// Set up MySQL connection.
var mysql = require("mysql");
var app = require('../server');

console.log('--------------look here----------------');
console.log(app.settings.env); //development
console.log('--------------look here----------------');

if (app.settings.env){
  var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "groupon_db"
  });
}else {
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

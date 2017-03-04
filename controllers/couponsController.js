var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "groupon_db"
});

//this is the users_controller.js file
router.get('/', function(req,res) {
  res.send('coupons! your user id is: ' + req.session.user_id + " your email is: " + req.session.user_email);
});

module.exports = router;

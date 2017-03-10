var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')


//this is the users_controller.js file
router.get('/', function(req,res) {
  res.render('index');
});

module.exports = router;

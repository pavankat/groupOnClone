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
router.get('/new', function(req,res) {
  res.render('users/new');
});

router.get('/sign-in', function(req,res) {
  res.render('users/sign_in');
});

router.get('/sign-out', function(req,res) {
  req.session.destroy(function(err) {
     res.redirect('/coupons')
  })
});

//if user trys to sign in with the wrong password or email tell them that on the page
router.post('/login', function(req, res) {
  
  var query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [ req.body.email ], function(err, response) {
      if (response.length == 0){
        res.redirect('/users/sign-in')
      }

        bcrypt.compare(req.body.password, response[0].password_hash, function(err, result) {
            if (result == true){

              req.session.logged_in = true;
              req.session.user_id = response[0].id;
              req.session.user_email = response[0].email;

              res.redirect('/coupons');
            }else{
              res.redirect('/users/sign-in')
            }
        });
  });
});

router.post('/create', function(req,res) {
  
  var query = "SELECT * FROM users WHERE email = ?"

  connection.query(query, [ req.body.email ], function(err, response) {
    if (response.length > 0) {
      res.send('we already have an email or username for this account')
    }else{

      bcrypt.genSalt(10, function(err, salt) {
          //res.send(salt)
          bcrypt.hash(req.body.password, salt, function(err, hash) {            
            var query = "INSERT INTO users (username, email, password_hash, company) VALUES (?, ?, ?, ?)"

            connection.query(query, [ req.body.username, req.body.email, hash, 'true' ], function(err, response) {

              req.session.logged_in = true;

              req.session.user_id = response.id;
              req.session.user_email = response.email;

              res.redirect('/coupons')
            });
          });
      });

    }
  });


});

module.exports = router;

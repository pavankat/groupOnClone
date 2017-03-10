var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')
var connection = require('../config/connection.js')

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
              req.session.company = response[0].company;
              req.session.username = response[0].username;

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
    console.log(response)
    if (response.length > 0) {
      res.send('we already have an email or username for this account')
    }else{

      bcrypt.genSalt(10, function(err, salt) {
          //res.send(salt)
          bcrypt.hash(req.body.password, salt, function(err, hash) {            
            var query = "INSERT INTO users (username, email, password_hash, company) VALUES (?, ?, ?, ?)"

            connection.query(query, [ req.body.username, req.body.email, hash, req.body.company ], function(err, response) {

              req.session.logged_in = true;

              req.session.user_id = response.insertId; //only way to get id of an insert for the mysql npm package

              var query = "SELECT * FROM users WHERE id = ?"
              connection.query(query, [ req.session.user_id ], function(err, response) {
                req.session.username = response[0].username;
                req.session.user_email = response[0].email;
                req.session.company = response[0].company;

                res.redirect('/coupons')
              });
            });
          });
      });

    }
  });


});

module.exports = router;

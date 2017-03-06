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
	//check to see if user is logged in 
		// res.send('coupons! your user id is: ' + req.session.user_id + " your email is: " + req.session.user_email);
	res.render('coupons/index', {
		logged_in: req.session.logged_in,
		user_email: req.session.user_email,
		user_id: req.session.user_id,
		company: req.session.company,
		username: req.session.username
	})
});

router.post('/create', function(req,res) {
	var query = "INSERT INTO coupons (company_name, price, item, coupon_code, expiration_date) VALUES (?, ?, ?, ?, ?)"

	console.log(query)

	console.log([ req.body.company_name, req.body.price, req.body.item, req.body.coupon_code, req.body.expiration_date ]);

	connection.query(query, [ req.body.company_name, req.body.price, req.body.item, req.body.coupon_code, req.body.expiration_date ], function(err, response) {

		console.log('----error-----')
		console.log(err);
		console.log('----error-----')

		console.log('----response-----')
		console.log(response);
		console.log('----response-----')


		res.redirect('/coupons')
	});
});

module.exports = router;

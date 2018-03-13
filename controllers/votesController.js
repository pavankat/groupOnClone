var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var connection = require('../config/connection.js')

//buying a coupon
router.post('/create', function(req,res) {
	//make sure user inserting is a customer
	if (!req.session.company){
		var query = "INSERT INTO user_votes (user_id, coupon_id) VALUES (?, ?)"

		connection.query(query, [ req.session.user_id, req.body.coupon_id ], function(err, response) {
			
			res.redirect('/coupons');
		});
	}else{
		res.send('you do not have access to this because you are not a customer')
	}
});

module.exports = router;

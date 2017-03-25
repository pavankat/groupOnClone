var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

/*
	did this instead of 
		var app = express();
	because now I can include this file and get the app

	this is useful in the connection.js file
*/
var app = module.exports = express(); 

var cookieParser = require('cookie-parser');

var session = require('express-session');
//allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: 6*1000*1000*1000*1000*1000*1000 }}));
app.use(cookieParser());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var applicationController = require("./controllers/applicationController.js");
var usersController = require("./controllers/usersController.js");
var couponsController = require("./controllers/couponsController.js");

app.use("/", applicationController);
app.use("/users", usersController);
app.use("/coupons", couponsController);

var port = process.env.PORT || 3000;
app.listen(port);



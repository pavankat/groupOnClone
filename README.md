# GroupOn Clone

## steps to deploy

1. create a MySQL database
2. populate it with db/schema.sql
3. update config/connection.js to your own database credentials
4. push to github
5. push to heroku (no index.php or composer.json)
6. login to heroku
7. add jawsdb to the app
8. click on jawsdb in heroku
9. using the credentials listed login to your mysql database like this in your terminal:

Don't forget to take off the < > brackets 

There is no space after u and p. This is not a typo. 

```
mysql -h <database url goes here> -u<username goes here> -p<password goes here>
```

10. ```heroku logs``` to debug things


## synoposis

This is an app where there are two types of users, companies and customers. Companies can create coupons and Customers can buy coupons. 

Technologies used: Express.js (routing), Handlebars (templating), jQuery (ajax, interactivity), MySQL (database)

In controllers/couponsController.js you will see basic authorization (which users can see what in the app).

In views/layouts/main.handlebars, you will see the layout file for the application.

In views/partials/coupons, you will see the partial views (snippets of html that can be used in other view files) that are used in the views/coupons files.

In controllers/usersController.js there is user authentication implemented (login, registration) leveraging the bcrypt npm package.

In the db/schema.sql file there is the database architecture of the application (the tables).

## to do

```
- comment the hell out of this
- make videos explaining different parts of this app
	- go over authentication 
		* authentication
		* authorization 
		* hitting a route via ajax
		* hitting a route via a form
		* handlebars
```

### Completed Routes

```
get route 
	companies can see 
		all the coupons that the users have purchased from their company

get route 
	-> for user to see all the coupons that they have bought

get route 
	customers can see 
		all the coupons 
			-> button that says buy now
				-> post request to insert into the user_coupons table

get route 
	form to create a coupon
```





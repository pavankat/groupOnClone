# GroupOn Clone

## steps to deploy

1. create a MySQL database + populate it with db/schema.sql + seed it

be in the root of your application in your terminal

if you have no password on your local mysql database:
```
mysql -u root 
CREATE DATABASE groupon_db;
USE groupon_db;
source db/schema.sql;
source db/seeds.sql
```

2. update config/connection.js to match your own database credentials (note: Windows machines probably won't be 3306)
3. push all code to github
4. push repo to heroku (do not include a index.php and composer.json file)
5. login to the heroku website
6. click on the app that you made on the heroku website. If you forgot what your app is - then you can run ```heroku open``` in your terminal in your app directory. The url of your app is the app name on the heroku website.
7. add jawsdb to your heroku app.
8. click on the jawsdb app on the heroku website.
9. using the credentials listed, login to your mysql database like this in your terminal. Be sure to be in the root of your application folder in the terminal.

Don't forget to take off the < > brackets 

There is no space after u and p. This is not a typo. 

```
mysql -h <database url goes here> -u<username goes here> -p<password goes here>
```

run ```SHOW DATABASES;```
then ```USE yourDBNameGoesHere```
then ```source db/schema.sql;```
then do control + c to get out of the mysql console.

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





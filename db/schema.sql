-- ### Schema

-- # user has many coupons 
-- # coupon has many users 

-- # users table
-- 	# id
-- 	# email
-- 	# password_hash
-- 	# username

	-- 1 tyler
	-- 2 rhyna
	-- 3 andrew

-- # coupons 
-- 	# id
-- 	# company_name
-- 	# price
-- 	# item 
-- 	# coupon_code
-- 	# expiration_date

	-- 1 whole foods
	-- 2 yoga place 
	-- 3 payless shoes 
	-- 4 sky diving 

-- # user_coupons 
-- 	# user_id
-- 	# coupon_id
	-- tyler whole foods          1  1
	-- tyler yoga place           1  2
	-- rhyna sky diving           2  4
	-- andrew yoga place          3  2
	-- andrew payless shoes       3  3



CREATE DATABASE groupon_db;
USE groupon_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	company boolean NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE coupons
(
	id int NOT NULL AUTO_INCREMENT,
	company_name varchar(255) NOT NULL,
	price decimal(10, 2) NOT NULL,
	item varchar(255) NOT NULL,
	coupon_code varchar(255) NOT NULL,
	expiration_date DATE NOT NULL,
	user_id INT NOT NULL, 
	PRIMARY KEY (id),
	FOREIGN KEY (user_id) references users(id)

);

CREATE TABLE user_coupons
(
	user_id int NOT NULL, 
	coupon_id int NOT NULL, 
	quantity int NOT NULL, 
	FOREIGN KEY (user_id) references users(id),
	FOREIGN KEY (coupon_id) references coupons(id)
);










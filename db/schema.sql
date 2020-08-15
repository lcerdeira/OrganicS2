-- OUTDATED - TABLE IS CREATED USING _TABLE.JS FILES IN MODELS
-- Local
DROP database if EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

-- JawsDB
DROP database if EXISTS g414tvzeppuo65yi;
CREATE DATABASE g414tvzeppuo65yi;
USE g414tvzeppuo65yi;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

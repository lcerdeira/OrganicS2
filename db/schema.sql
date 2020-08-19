-- OUTDATED - DO NOT USE - TABLES ARE GENERATED AUTOMATICALLY - USE SEEDS TO POPULATE
DROP DATABASE IF EXISTS farmers_market;

CREATE DATABASE farmers_market;

USE farmers_market;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(30) NULL,
  devoured boolean not null,
  createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);

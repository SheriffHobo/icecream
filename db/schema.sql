CREATE DATABASE icecreams_db;
USE icecreams_db;

CREATE TABLE icecream
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT false,
	PRIMARY KEY (id)
);
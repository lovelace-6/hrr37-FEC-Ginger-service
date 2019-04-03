CREATE DATABASE IF NOT EXISTS bookshelf;

USE bookshelf;

CREATE TABLE IF NOT EXISTS books (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  description varchar(2000) NOT NULL,
  author_id int,
  published_year int NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS authors (
  id int NOT NULL AUTO_INCREMENT,
  name varchar (50) NOT NULL,
  details varchar(2000) NOT NULL,
  PRIMARY KEY (ID)
);

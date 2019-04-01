CREATE DATABASE IF NOT EXISTS bookshelf;

USE bookshelf;

CREATE TABLE IF NOT EXISTS books (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  author varchar (50) NOT NULL,
  author_details varchar(2000) NOT NULL,
  description varchar(2000) NOT NULL,
  published_year int NOT NULL,
  PRIMARY KEY (ID)
);



const mysql = require('mysql');
const config = require('./config');
const connection = mysql.createConnection(config);

connection.connect();

const search = (search, values) => {
  return new Promise((resolve, reject) => {
    connection.query(search, values, (err, insert) => {
      if(err)
      return reject(err);
      resolve(insert)
    })
  })
};

const addAuthor = function(value) {
  return search ('INSERT INTO authors (name, details) VALUES (?, ?)', [value.name, value.details])
}

const addBook = function(value) {
  return search ('INSERT INTO books (title, description, published_year) VALUES (?, ?, ?)', [value.title, value.description, value.published_year])
}

module.exports = {
  addAuthor, addBook
}

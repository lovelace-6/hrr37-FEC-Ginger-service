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

const addBook = function(value) {
  return search ('INSERT INTO books (title, author, author_details, description, published_year) VALUES (?, ?, ?, ?, ?)', [value.title, value.author, value.author_details, value.description, value.published_year])
}

const getBook = function(id) {
  return search('SELECT * FROM books WHERE id =' + id);
}

const close = function() {
  connection.end();
}

module.exports = {
  addBook, getBook, close
}

const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect(function(err){
  if(err) throw err;
  console.log('connected')
});

const search = (search, values) => new Promise((resolve, reject) => {
  connection.query(search, values, (err, insert) => {
    if (err) return reject(err);
    resolve(insert);
  });
});

const addBook = function (value) {
  return search('INSERT INTO books (title, description, author_id, published_year) VALUES (?, ?, ?, ?)', [value.title, value.description, value.author_id, value.published_year]);
};

const addAuthor = function(value) {
  return search('INSERT INTO authors (name, details, profile_pic) VALUES (?, ?, ?)', [value.name, value.details, value.profile_pic]);
};

const getBook = function (id) {
  return search(`SELECT * FROM books WHERE id =${id}`);
};

const close = function () {
  connection.end();
};

module.exports = {
  addBook, getBook, close, addAuthor
};

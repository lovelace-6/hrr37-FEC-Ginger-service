/* eslint-disable prefer-destructuring */
/* eslint-disable func-call-spacing */

const Pool = require('pg').Pool;
const config = require('./pg.config.js');

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: 'bookshelf',
  password: config.password,
  port: 5432,
});

const getBooks = async (id) => {
  try {
    const query = `select * from books where id =${id}`;
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    return error;
  }
};

const getAuthor = async (authorId) => {
  try {
    const query = `select * from authors where id = ${authorId}`;
    const response = await pool.query(query);
    return response.rows[0];
  } catch (error) {
    return error;
  }
};

const getAuthorTitles = async (authorId) => {
  try {
    const query = `select * from books where author_id = ${authorId}`;
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    return error;
  }
};

const updateStatus = async (bookStatus, booksId) => {
  try {
    const query = `update books set status = ${bookStatus} where id = ${booksId}`;
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    return error;
  }
};

const deleteBook = async (id) => {
  try {
    const query = `delete from books where id =${id}`;
    const response = await pool.query(query);
    return response;
  } catch (error) {
    return error;
  }
};

const addBook = async (value) => {
  try {
    const query = `insert into books(title,description, author_id, published_year, cover, status) VALUES ('${value.title}', '${value.description}', ${value.author_id}, ${value.published_year}, '${value.cover}', '${value.status}')`;
    const response = await pool.query(query);
    return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getBooks,
  getAuthor,
  getAuthorTitles,
  updateStatus,
  addBook,
  deleteBook,
};

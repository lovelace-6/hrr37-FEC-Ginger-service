/* eslint-disable prefer-template */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const nr = require('newrelic');
const express = require('express');

const app = express();
const port = process.env.PORT || 9000;
const path = require('path');
const { promisify } = require('util');
const bodyParser = require('body-parser');
const redis = require('redis');
const pg = require('../database/pg.index.js');
const data = require('../database/dummy_data.js');


const client = redis.createClient({
  port: 6379,
  host: 'ec2-13-59-78-229.us-east-2.compute.amazonaws.com',
});


const getAsync = promisify(client.get).bind(client);

client.on('error', (err) => {
  console.log('err', err);
});

app.get('*.gz', (req, res, next) => {
  console.log('here', req.url);
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id', express.static(path.join(__dirname, '../public')));

app.get('/loaderio-1dd6247bf885e951b0aaa0b8236be432/', (req, res) => {
  console.log('verification path hit');
  const filePath = path.join(__dirname, '../loaderio-1dd6247bf885e951b0aaa0b8236be432.txt');
  res.sendFile(filePath);
});

app.get('/books/:id/authors/title', async (req, res) => {
  console.log('server/index line 16');
  const booksId = req.params.id;
  const redisBookId = booksId;

  const cacheBook = await getAsync(redisBookId);

  if (!cacheBook) {
    const book = await pg.getBooks(booksId);
    res.status(200).json(book);
    client.setex(redisBookId, 3600, JSON.stringify(book));
  } else {
    res.json(JSON.parse(cacheBook));
  }
});

app.get('/books/:id/authors/:id', async (req, res) => {
  const authorId = req.params.id;
  const author = await pg.getAuthor(authorId);
  res.json(author);
});
app.get('/books/:id/authors/:id/titles', async (req, res) => {
  const authorId = req.params.id;
  const redisAuthorId = authorId;

  const cacheAuthorItem = await getAsync(redisAuthorId);

  if (!cacheAuthorItem) {
    const books = await pg.getAuthorTitles(authorId);
    res.json(books);
    client.setex(redisAuthorId, 3600, JSON.stringify(books));
  } else {
    res.json(JSON.parse(cacheAuthorItem));
  }
});

app.post('/books/:id/authors/status', async (req, res) => {
  const bookStatus = req.body.status;
  const booksId = req.body.id;
  const status = await pg.updateStatus(bookStatus, booksId);
  res.send(status);
});


app.post('/books/:id/addBook', async (req, res) => {
  const value = {
    title: data.title(),
    description: data.description(),
    author_id: data.author_id({ min: 1, max: 1000000 }),
    published_year: data.year({ min: 1920, max: 2019 }),
    cover: data.cover + data.author_id({ min: 1, max: 7 }) + '.jpg',
    status: data.status,
  };
  const response = await pg.addBook(value);
});

app.delete('books/:id/deleteBook', async (req, res) => {
  const response = await pg.deleteBook(req.params.id);
  console.log(response);
});

app.listen(port, () => console.log(`listening on port ${port}!`));

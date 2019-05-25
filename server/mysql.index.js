const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/secondaryDBs/index.js/index.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id', express.static(path.join(__dirname, '../public')));

app.get('/books/:id/authors/:id', async (req, res) => {
  const author = await db.getAuthor(req.params.id);
  res.json(author);
});

app.get('/books/:id/authors/:id/titles', async (req, res) => {
  const books = await db.getAuthorTitles(req.params.id);
  res.json(books);
});

app.post('/books/:id/authors/status', async (req, res) => {
  const status = await db.updateStatus(req.body.status, req.body.id);
  res.send(status);
});

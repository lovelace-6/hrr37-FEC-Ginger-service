const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

const mongo = require('../database/mongo.index.js')

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id', express.static(path.join(__dirname, '../public')));

//MONGO VERSION

app.get('/books/:id/authors/title', async (req, res) => {
    console.log('server/index line 16')
  var booksId = req.params.id
  var book =  await mongo.getBooks(booksId)
  res.status(200).json(book)

});

app.get('/books/:id/authors/:id', async (req, res) => {
  console.log('server/index line 21')
  var authorId = req.params.id
  const author = await mongo.getAuthor(authorId);
  res.json(author);
});



app.get('/books/:id/authors/:id/titles', async (req, res) => {
  var authorId = req.params.id
  const books = await mongo.getAuthorTitles

  (authorId);
  res.json(books);
});


app.post('/books/:id/authors/status', async (req, res) => {
  var bookStatus = req.body.status;
  var booksId = req.body.id
  const status = await mongo.updateStatus
  (bookStatus, booksId);
  res.send(status);
});

app.listen(port, () => console.log(`listening on port ${port}!`));

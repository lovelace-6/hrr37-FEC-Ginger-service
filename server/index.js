const express = require('express');

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id/author', express.static(path.join(__dirname, '../public')));

app.get('/books/:id', async (req, res) => {
  const book = await db.getBook(req.params.id);
  res.json(book);
});

app.listen(port, () => console.log(`listening on port ${port}!`));

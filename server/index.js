const nr = require('newrelic');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000
const path = require('path');
const bodyParser = require('body-parser');
const pg = require('../database/pg.index.js');
const data = require('../database/dummy_data.js');
// const mongo = require('../database/mongo.index.js')

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);



client.on('error',(err) => {
  console.log('err',err)
})

app.get('*.gz', function (req, res, next) {
  console.log('here',req.url)
  // req.url = req.url + '.gz'
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use('/books/:id', express.static(path.join(__dirname, '../public')));

//USING POSTGRES



app.get('/loaderio-1dd6247bf885e951b0aaa0b8236be432/',(req,res)=>{
  console.log('verification path hit')
  var filePath = path.join(__dirname,'../loaderio-1dd6247bf885e951b0aaa0b8236be432.txt')
  res.sendFile(filePath)

})

app.get('/books/:id/authors/title', async (req, res) => {
    console.log('server/index line 16')
    var booksId = req.params.id
  const redisBookId = booksId

  var cacheBook = await getAsync(redisBookId)

  if(!cacheBook){

    var book =  await pg.getBooks(booksId)
    res.status(200).json(book)
    client.setex(redisBookId,3600,JSON.stringify(book))
  } else {

    res.json(JSON.parse(cacheBook))
  }




});

app.get('/books/:id/authors/:id', async (req, res) => {
  console.log('server/index line 21')
  var authorId = req.params.id
  const author = await pg.getAuthor(authorId);
  res.json(author);
});



app.get('/books/:id/authors/:id/titles', async (req, res) => {

  var authorId = req.params.id
  var redisAuthorId = authorId

  var cacheAuthorItem = await getAsync(redisAuthorId);

  console.log(cacheAuthorItem)
  if(!cacheAuthorItem){

    const books = await pg.getAuthorTitles
    (authorId);

    res.json(books);
    client.setex(redisAuthorId,3600,JSON.stringify(books))
  } else {


    res.json(JSON.parse(cacheAuthorItem))
  }




});


app.post('/books/:id/authors/status', async (req, res) => {
  var bookStatus = req.body.status;
  console.log(bookStatus)
  var booksId = req.body.id
  const status = await pg.updateStatus
  (bookStatus, booksId);
  res.send(status);
});

//EXTENDING CRUD OPERATIONS TO ADD AND DELTE
app.post('/books/:id/addBook', async (req,res)=>{
  console.log('added request triggered')
  var value = {
    title: data.title(),
    description: data.description(),
    author_id: data.author_id({min:1, max:1000000}),
    published_year: data.year({ min: 1920, max: 2019}),
    cover: data.cover + data.author_id({min:1,max: 7})+'.jpg',
    status: data.status
  }
  console.log('new book data',value)
  var response = await pg.addBook(value)
  console.log(response)
})

app.delete('books/:id/deleteBook', async(req,res)=>{
  console.log('delete triggered')
  var response = await pg.deleteBook(req.params.id)
  console.log(response)
})

app.listen(port, () => console.log(`listening on port ${port}!`));

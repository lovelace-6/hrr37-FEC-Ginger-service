//USING NATIVE MONGODB DRIVER
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/bookshelf";
var bookshelf;

MongoClient.connect(url,function(err,client){
    console.log('connected');
    bookshelf= client.db('bookshelf')

  }
)

var getBooks =  async (booksId)=>{

  var booksId = Number(booksId)
  var books = await bookshelf.collection('books').findOne({booksId:booksId})

  console.log(books)
  return books
}

var getAuthor = async (authorId) => {
  var authorsId = Number (authorId)
  var authors = await bookshelf.collection('authors')
  .findOne({authorsID: authorsId})
  return authors
}

var getAuthorTitles = async (authorId) => {
  var authorsId = Number(authorId);
  var authorTitles = await bookshelf.collection('books').findOne({author_id:authorsId})
  return authorTitles;
}

var updateStatus = async (bookStatus, booksId) => {
  var bookStatus = bookStatus
  var booksId = Number(booksId);

  var update = await bookshelf.collection('books').findOneAndUpdate(
    {booksID: booksId},
    {$set: {status:bookStatus}},
    {returnNewDocument: true}

  )
return update

}


module.exports = {
  getBooks:getBooks,
  getAuthor: getAuthor,
  getAuthorTitles: getAuthorTitles,
  updateStatus: updateStatus
}


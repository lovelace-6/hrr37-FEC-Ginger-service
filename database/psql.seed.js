
const csv = require('fast-csv');
const fs = require('fs');
const data = require('../database/dummy_data.js')


const generateBooks = () =>{
  
  var books = {
    title: data.title(),
    description: data.description(),
    author_id: data.author_id({min:1, max:1000000}),
    published_year: data.year({ min: 1920, max: 2019}),
    cover: data.cover + data.author_id({min:1,max: 7})+'.jpg',
    status: data.status}

    return books
}

const generateAuthor = () => {
 
 var authors = {
    name: data.name(),
    details: data.details(),
    profile_pic: data.profilePic(),
    followers: data.followers({min: 0, max: 20000})
  }
  return authors
}


//Writing CSV file 
var csvStream = csv.createWriteStream({headers: true})
var writableStream = fs.createWriteStream("BooksData.csv");

writableStream.on("finish", function(){
  console.log("Books DONE!");
});

csvStream.pipe(writableStream);
csvStream.on('drain', function() {
  writeBooks();
});
var i =10000000;

function writeBooks(){

while( i>0){
if(!csvStream.write(generateBooks())){
  i--
  return
  }
i--
}
var end = new Date() - start
console.log('time required to generate CSV',end, 'ms')
csvStream.end();

}

var start = new Date()
writeBooks()


var csvStreamAuthors = csv.createWriteStream({headers: true})
var writableStreamAuthors = fs.createWriteStream("AuthorsData.csv");

writableStreamAuthors.on("finish", function(){
  console.log("Authors DONE!");
});

csvStreamAuthors.pipe(writableStreamAuthors);
csvStreamAuthors.on('drain', function() {
  writeAuthors();
});
var numOfAuthors =1000000;

function writeAuthors(){

while( numOfAuthors>0){
if(!csvStreamAuthors.write(generateAuthor())){
  numOfAuthors--
  return
  }
numOfAuthors--
}
var endAuthors = new Date() - startAuthors
console.log('time required to generate CSV',endAuthors, 'ms')
csvStreamAuthors.end();

}

var startAuthors = new Date()
writeAuthors()




module.exports = {
  generateBooks: generateBooks,
  generateAuthor: generateAuthor
}
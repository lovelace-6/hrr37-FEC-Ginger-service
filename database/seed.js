const db = require('./index.js');
const data = require('../database/dummy_data.js');

let authorCount = 0;
let bookCount = 0;

let createAuthor = ()=> {
    db.addAuthor({name: data.name(), details: data.details()}).then(() => {
      authorCount++;
      if(authorCount < 100) {
        createAuthor()
    }
  })
};

let createBook = ()=> {
    db.addBook({title: data.title(), description: data.description(), published_year: data.year({min:1920, max:2019})}).then(() => {
      bookCount++;
      if(bookCount < 100) {
      createBook();
    }
  })
}

createAuthor();
createBook();








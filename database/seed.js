const db = require('./index.js');
const data = require('../database/dummy_data.js');

let createAuthor = ()=> {
  for (let i = 0; i < 100; i++) {
    db.addAuthor({name: data.name(), details: data.details()})
  }
};

let createBook = ()=> {
  for (let i = 0; i < 100; i++) {
    db.addBook({title: data.title(), description: data.description(), published_year: data.year({min:1920, max:2019})});
  }
}

async function seed() {
  await createBook();
  await createAuthor();
}

seed().then(() => {
  db.close();
});







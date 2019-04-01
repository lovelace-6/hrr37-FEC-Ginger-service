const db = require('./index.js');
const data = require('../database/dummy_data.js');



let createBook = ()=> {
  for (let i = 0; i < 100; i++) {
    db.addBook({title: data.title(), author: data.name(), author_details: data.details(), description: data.description(),  published_year: data.year({min:1920, max:2019})});
  }
}

async function seed() {
  await createBook();
}

seed().then(() => {
  db.close();
});







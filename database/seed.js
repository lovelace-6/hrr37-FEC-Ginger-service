const db = require('./index.js');
const data = require('../database/dummy_data.js');

const createBook = () => {
  for (let i = 0; i < 100; i++) {
    db.addBook({
      title: data.title(), description: data.description(), author_id: data.author_id({min: 1, max: 50}), published_year: data.year({ min: 1920, max: 2019 })
    });
  }
}

const createAuthor = () => {
  for (let i = 0; i < 50; i++) {
    db.addAuthor({
      name: data.name(), details: data.details(), profile_pic: data.profilePic() + data.author_id({min: 1, max: 3}) + '.jpg'
    });
  }
}

async function seed() {
  await createBook();
  await createAuthor();
}

seed().then(() => {
  db.close();
});







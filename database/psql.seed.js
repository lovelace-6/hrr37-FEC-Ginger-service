/* eslint-disable no-console */
/* eslint-disable prefer-template */

const csv = require('fast-csv');
const fs = require('fs');
const data = require('../database/dummy_data.js');

const generateBooks = () => {
  const books = {
    title: data.title(),
    description: data.description(),
    author_id: data.author_id(
      {
        min: 1,
        max: 1000000,
      },
    ),
    published_year: data.year({ min: 1920, max: 2019 }),
    cover: data.cover + data.author_id({ min: 1, max: 7 }) + '.jpg',
    status: data.status,
  };

  return books;
};

const generateAuthor = () => {
  const authors = {
    name: data.name(),
    details: data.details(),
    profile_pic: data.profilePic(),
    followers: data.followers({ min: 0, max: 20000 }),
  };
  return authors;
};

const csvStream = csv.createWriteStream({ headers: true });
const writableStream = fs.createWriteStream('BooksData.csv');

writableStream.on('finish', () => {
  console.log('Books DONE!');
});

csvStream.pipe(writableStream);
let numOfBooks = 1;

const writeBooks = () => {
  while (numOfBooks < 10000001) {
    if (!csvStream.write(generateBooks())) {
      numOfBooks += 1;
      return;
    }
    numOfBooks += 1;
  }
  csvStream.end();
};

writeBooks();
csvStream.on('drain', () => {
  writeBooks();
});


const csvStreamAuthors = csv.createWriteStream({ headers: true });
const writableStreamAuthors = fs.createWriteStream('AuthorsData.csv');

writableStreamAuthors.on('finish', () => {
  console.log('Authors DONE!');
});

csvStreamAuthors.pipe(writableStreamAuthors);

let numOfAuthors = 1;

const startAuthors = new Date();
const writeAuthors = () => {
  while (numOfAuthors < 1000001) {
    if (!csvStreamAuthors.write(generateAuthor())) {
      numOfAuthors += 1;
      return;
    }
    numOfAuthors += 1;
  }

  const endAuthors = new Date() - startAuthors;
  console.log('time required to generate CSV', endAuthors, 'ms');
  csvStreamAuthors.end();
};

writeAuthors();

csvStreamAuthors.on('drain', () => {
  writeAuthors();
});

module.exports = {
  generateBooks,
  generateAuthor,
};

const data = require('../database/dummy_data.js')

const generateBooks = () =>{
const books = [];
const desiredNumber = 10000000;
for (let i = 0; i<desiredNumber; i++) {
  books.push({
    title: data.title(),
    description: data.description(),
    author_id: author_id({min:1, max:1000000}),
    published_year: data.year({ min: 1920, max: 2019}),
    cover: data.cover + data.author_id({min:1,max: 7})+'.jpg',
    status: data.status})

  }
  return books
}


const generateAuthor = () => {
  const authors = [];
  const desiredNumber = 1000000;
  authors.push({
    name: data.name(),
    details: data.details(),
    profile_pic: `${data.profilePic + data.author_id({ min: 1, max: 3 })}.jpg`,
    followers: data.followers({min: 0, max: 20000})
  })
}

module.exports = {
  generateBooks: generateBooks,
  generateAuthor: generateAuthor
}
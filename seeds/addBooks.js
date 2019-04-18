const generate = require('../database/psql.seed.js')


exports.seed = async (knex, Promise) => {
const booksData = generate.generateBooks()
console.log('books generated',books.length)
await knex.batchInsert('books', booksData.slice(0,10000), 10000);



};

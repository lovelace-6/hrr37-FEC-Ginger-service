# Bookshelf

> Bookshelf is a clone of an item page from https://goodreads.com. It includes 4 modules: the main book information, extra details, author details, and the reviews.

## Author Module
> This repo is specific to the author's module. Specific features include:
 * Displaying author Name
 * Profile picture
 * followers
 * author bio
 * books by author.
   * Books by author are displayed in image format.
 * Book summary in tooltip
 This module uses postgres as it's backend. Secondary databases within the repo were used for comparing MongoDB against Postgres. Secondary databases are currntly not in use in the repo. They are there for database benchmarking purposes.

 # Database Specifics
 * Database is seeded with 50 million records of books and 10 million authors.
 * Currently uses postgres as query times turned out to be faster than MonogoDB.

 # Development
 * To start bundling ```npm run build```
 * To start server ```npm run start:dev```
 * Create postgres schema ```npm run psql:schema```
 * To seed database (Caution, seeding generates 50M books, and 10M authors. This will take around 15 minutes and will occupy around 8GB of memory on your device) ```npm run psql:seed```

 ## Installing Dependencies
 * Install required packages ```npm install```

### API ENDPOINTS (CRUD)
|Intention                  | request type  | request url       | request body             | side effect         | response body
|---------------------------|:-------------:|-------------------|--------------------------|---------------------|----------------------------------------------|
| Retrieves book info     | GET           | /books/:id/authors/title      | none             | none                | `{id:1,title:Generic Frozen Towels,description:..., author_id:..., published_year:..., cover:..., status:want to read"}` |
| Retrieves author info  | GET            | /books/:id/authors/:id          | none             | none                | `{id:1, name:..., details:..., profile_pic:..., followers:...}` |



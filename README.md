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
 
 # Development 
 * To start bundling ```npm run build```
 * To start server ```npm run start:dev```
 
 ## Installing Dependencies 
 * Install required packages ```npm install```

### API ENDPOINTS (CRUD) 
|Intention                  | request type  | request url       | request body             | side effect         | response body 
|---------------------------|:-------------:|-------------------|--------------------------|---------------------|----------------------------------------------|
| Retrieves book info     | GET           | /books/:id/authors/title      | none             | none                | `{id:1,title:Generic Frozen Towels,description:..., author_id:..., published_year:..., cover:..., status:want to read"}` |
| Retrieves author info  | GET            | /books/:id/authors/:id          | none             | none                | `{id:1, name:..., details:..., profile_pic:..., followers:...}` |



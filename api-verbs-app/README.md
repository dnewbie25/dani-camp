# API Verbs App

This is a basic JS and HTML app to test API verbs like PUT, POST, GET and DELETE using a dummy API that I created called [API-Verbs-App](https://github.com/dnewbie25/API-Verbs-App).

You can access the API Verbs App here: _[https://api-verbs-app.netlify.app](https://api-verbs-app.netlify.app)_

## How to use

1. Open the `index.html` file in your browser.
2. Use the API-Verbs-App API endpoints to test the different API verbs. Each verb can be tested using an input field that will show in screen what has been retrieved.

## Endpoints

* GET: https://api-verbs-app.onrender.com/get
  * Accepts an integer as id (default books go from `1` to `6`), or the string `all` to retrieve all books
* POST: https://api-verbs-app.onrender.com/post
  * Accepts a string with the id, title, author and category, separated by commas, i.e, `7,Harry Potter and the Hollows, J Rowling,Fantasy`
* PUT: https://api-verbs-app.onrender.com/put
  * Accepts a string with the id to modify, along with title, author and category, separated by commas, i.e, `7,Harry Potter and the Deadly Hollows, J.K. Rowling,Fantasy`
* DELETE: https://api-verbs-app.onrender.com/delete
  * Accepts a string with an id or ids of the books to delete: `1` or `1,6,2`

## Technologies Used

* HTML
* CSS
* JavaScript
* Postman-Echo API
* Python and FastAPI for the API-Verbs-App

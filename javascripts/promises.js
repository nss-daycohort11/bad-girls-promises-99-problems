requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "get-books", "get-book-types", "dom"], 
  function($, Handlebars, bootstrap, get_books, get_book_types, dom) {

   var listOfBooks = {
    booksTemplate: {

    }

  }

  get_books()
    .then(function(books) {

    listOfBooks.booksTemplate = books;
      console.log("books in promise.js", books);
      console.log("listOfBooks in promise.js", listOfBooks);
      dom.dom(listOfBooks);

    }) 
    .fail();


  }
);

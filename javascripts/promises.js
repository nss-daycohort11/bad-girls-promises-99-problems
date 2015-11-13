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
      
      return get_book_types(books)

    }).then(function(types){
      //loop over books and find the corresponding key over types
      //them give the book a type key. send that array to the handlebar template.
      console.log("list of Books>>>>>>", listOfBooks)
      for (key in listOfBooks.booksTemplate){
        console.log("loop works");
        if (types.fiction.id === listOfBooks.booksTemplate[key].booktype) {
          console.log("conditional statement works");

            listOfBooks.booksTemplate[key].booktype = types.fiction.label;
            
            
            console.log("booktype fiction", listOfBooks.booksTemplate.booktype);


        } else if (types.science.id === listOfBooks.booksTemplate[key].booktype) {

          listOfBooks.booksTemplate[key].booktype = types.science.label;
          console.log("booktype science", listOfBooks.booksTemplate.booktype);
          
        }
      

      }
      dom.dom(listOfBooks);
    })
    .fail(function(){
      console.log("error");
      });


  }
);

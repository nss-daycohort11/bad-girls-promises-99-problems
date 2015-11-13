define(function(require) {
  var _ = require("lodash");

  return {
    load: function(fn) {
      // This XHR should be in its own require module, not here
      $.ajax("https://nss-book-store.firebaseio.com/booktypes.json").done(function() {

        // This XHR does belong here
        $.ajax("https://nss-book-store.firebaseio.com/books.json").done(function(books) {

          /*
            This code is dependent upon two XHRs and violates
            the Single Responsibility Principle.

            I've also given you a little preview of ES6 (the newest
            version of JavaScript syntax). They are called fat arrows.
            Check out the docs at http://es6-features.org/#ExpressionBodies
          */
          // types = Object.keys( types ).map(key => types[ key ]);
          books = Object.keys( books ).map(key => books[ key ]);

          /*
            I'm using the lodash `find()` method here.
              https://lodash.com/docs#find
              _.find(collection, [predicate=_.identity], [thisArg])
           */
          var books = books.map(book => {
            book.type = _.find(types, { id:book.booktype }).label;
            return book;
          });
            console.log("books", books);

          // Still relying on a callback? That's so 2014...
          fn(books);

        });
      });

    }
  };
});
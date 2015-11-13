define(function(require) {
  var _ = require("lodash");

  var Q = require("q");
  var $ = require("jquery");

  return function() {
    var deferred = Q.defer();

    $.ajax({
      url: "https://nss-book-store.firebaseio.com/books.json"
    }).done(function(books) {
      deferred.resolve(books);
     
      
    }).fail(function(xhr, status, error) {
      deferred.reject(error);
    });

    
    return deferred.promise;
    console.log(deferred.promise);


        /*
          This code is dependent upon two XHRs and violates
          the Single Responsibility Principle.

          I've also given you a little preview of ES6 (the newest
          version of JavaScript syntax). They are called fat arrows.
          Check out the docs at http://es6-features.org/#ExpressionBodies
        */
        
    // var books = Object.keys( books ).map(key => books[ key ]);
        // console.log("books from get-books", books);

        /*
          I'm using the lodash `find()` method here.
            https://lodash.com/docs#find
         */
   

      }
});


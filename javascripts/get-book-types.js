
define(function(require) {
  var _ = require("lodash");

  var Q = require("q");
  var $ = require("jquery");

  return function() {
    var deferred = Q.defer();

    $.ajax({
	 url: "https://nss-book-store.firebaseio.com/booktypes.json"
		}).done(function(types) {	
      deferred.resolve(types);
     console.log("types", types);
      
    }).fail(function(xhr, status, error) {
      deferred.reject(error);
    });

    
    return deferred.promise;
    console.log(deferred.promise);

   

      }
});


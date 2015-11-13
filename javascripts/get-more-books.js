define(function(require) {
	var _ = require("lodash");

	return {
	    load: function(fn) {
	    	$.ajax("https://nss-book-store.firebaseio.com/booktypes.json").done(function(types) {
	    		types = Object.keys( types ).map(key => types[ key ]);
	    	});
		}	
    }
});
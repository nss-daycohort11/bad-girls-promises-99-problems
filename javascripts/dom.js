define(["jquery", "hbs", "get-books", "get-book-types"], function($, hbs, get_books, get_book_types){

	return {
		dom: function (booksTemplate){
			console.log("dom function is working");
			console.log("booksTemplate from dom", booksTemplate);
			require(["hbs!../templates/books"], function (bookObject){
				$("#bookList").append(bookObject(booksTemplate));
				console.log("bookObject", bookObject(booksTemplate));

			});
		}

	}
});
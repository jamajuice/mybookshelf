/*
 * IIFE to keep code clean and safe
 */
(function(){
	
	angular
	   .module("myBookshelf")
	   .controller("bookCtrl", BookController);

       BookController.$inject = ['DataService'];

	   function BookController(DataService){
	   		var vm = this;
	   		vm.data = [];
	   		vm.search = "";
	   		vm.showAllBooks = true;
	   		vm.showMyBooks = false;
	   		vm.toggleMyBooks = toggleMyBooks;
	   		vm.update = update;

	   		activate();

	        function activate() {
	            return getBooksData().then(function() {
	              console.log("Getting Data...");//logger.info('Activated Avengers View');
	            });
	        }

	        function getBooksData() {
	          return DataService.getBooksData()
	                .then(function(data) {
	                   vm.data = data;
	                  return vm.data;
	                });
	        }

	        function update(newBook){
	        	console.log('Updating data');
	        	var bookDetails = newBook;
	        	var bookObj = {"book_details" : [{title: 4, author : "", description : "" }]};
	        	console.log(bookDetails);
	        	//console.log(bookDetails['title']);
	        	bookObj.book_details[0].title =  bookDetails.title;
	        	bookObj.book_details[0].author = bookDetails.author;
	        	bookObj.book_details[0].description = bookDetails.description;
	        	//bookObj.book_details.unshift(bookDetails);
	        	bookObj.selected = null;
	        	console.log(bookObj);
	        	vm.data.unshift(bookObj);
	        }

	        function toggleMyBooks(){
	        	console
	        	if(!vm.showMyBooks){
	        		vm.showAllBooks = false;
	        		vm.showMyBooks = true; 
	        		vm.search = "";
	        	}else{
	        		vm.showAllBooks = true;
	        		vm.showMyBooks = false; 
	        		vm.search = "";
	        	}
	        }
	   }
})();


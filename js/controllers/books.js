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
	   		vm.toggleAllBooks = toggleAllBooks;
	   		vm.toggleMyBooks = toggleMyBooks;
	   		vm.update = update;
	   		vm.reset = reset;

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
	        	var bookDetails = newBook;
	        	var bookObj = {"book_details" : [{title: 4, author : "", description : "" }]};
	        	bookObj.book_details[0].title =  bookDetails.title;
	        	bookObj.book_details[0].author = bookDetails.author;
	        	bookObj.book_details[0].description = bookDetails.description;
	        	bookObj.selected = null;
	        	vm.data.unshift(bookObj);
	        }

	        function reset(){
	        	vm.newBook={title:'',auhtor:'',description:''};
                vm.bookForm.$setPristine();
	        }

	        function toggleAllBooks(){
	        	if(!vm.showAllBooks){
	        		vm.showAllBooks = true;
	        		vm.showMyBooks = false; 
	        		vm.search = "";
	        	}
	        }
	         
	        function toggleMyBooks(){
	        	if(!vm.showMyBooks){
	        		vm.showAllBooks = false;
	        		vm.showMyBooks = true; 
	        		vm.search = "";
	        	}
	        }
	   }
})();


(function(){
	angular
		.module("myBookshelf")
		.factory("DataService", DataService);

    	DataService.$inject = ['$http'];

        function DataService($http){
            return {
              getBooksData: getBooksData
            };

            function getBooksData() {
              return $http.get("https://api.nytimes.com/svc/books/v3/lists.json",{
                     params: {
                          "api-key": "14683607e3364210b547fd9c4eddf34c",
                          "list": "e-book-fiction"
                        }
                     })
                    .then(getBooksDataComplete)
                    .catch(getBooksDataFailed);

            function getBooksDataComplete(response) {
                  var data = response.data.results;
                  for (var book in data) {
                      book.selected = null;
                    }
                  return data;
            }

            function getBooksDataFailed(error) {
                 console.log('getBooksData() failed');
            }
          
      }

    }
  
})();
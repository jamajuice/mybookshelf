(function(){
	angular
		.module("myBookshelf")
		.factory("DataService", DataFactory);

	function DataFactory(){
		var dataObj ={
			allBookData: allBookData
		};

        function allBookData(){
          $http.get("https://api.nytimes.com/svc/books/v3/lists.json",{
             params: {
                  "api-key": "14683607e3364210b547fd9c4eddf34c",
                  "list": "e-book-fiction",
                  "weeks-on-list": 1
                }
          }).then(function(response){ $scope.details = response.data; });

        }

        function add(){

        }


		return dataObj;
	}

  
})();
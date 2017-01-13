/*'use strict'

angular.module('myBookshelf', [])
  .controller('bookCtlr', function($scope, $http) {
    fetch();

    function fetch(){
      $http.get("https://api.nytimes.com/svc/books/v3/lists.json",{
         params: {
              "api-key": "14683607e3364210b547fd9c4eddf34c",
              "list": "e-book-fiction"
            }
      }).then(function(response){ $scope.details = response.data.results; });

    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
}); 
*/

  /*
 * IIFE to keep code clean and safe
 */
(function(){

    /*
     * Declaration of main angular module for this appllication.
     *
     * It is named turtleFacts and has no dependencies (hence the 
     * empty array as the second argument)
     */
    angular
        .module("myBookshelf", []);

})();


    /*$http({
        method: 'GET',
        url: "https://api.nytimes.com/svc/books/v3/lists.json",
        params: {
          api-key: "14683607e3364210b547fd9c4eddf34c",
          list: "e-book-fiction",
          weeks-on-list: 10
        },
      }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          $scope.details = response.data;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });*/

/*
 * IIFE to keep code clean and safe
 */
(function(){
	
	angular
	   .module("myBookshelf")
	   .controller("listCtrl", ListController);

       ListController.$inject = ['quizMetrics', 'DataService'];

	   function ListController(quizMetrics, DataService){
	   		var vm = this;

            vm.quizMetrics = quizMetrics;
	   		vm.data = DataService.bookData;
	   		vm.activeFooty = {};
	   		vm.changeActiveFooty = changeActiveFooty;
	   		vm.search = "";
	   		vm.activateQuiz = activateQuiz;

	   }

		
})();


var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');

    $stateProvider
    	.state('home', {
    		url: '/home',
    		templateUrl: '/views/bookData.html',
    		controller: 'BookController'
    	});

    $stateProvider
    	.state('addBook', {
    		url: '/addBook',
    		templateUrl: '/views/createBook.html',
    		controller: 'BookController'
    	});

    $stateProvider
    	.state('updateBook', {
    		url: '/modBook',
    		templateUrl: '/views/updateBook.html',
    		controller: 'BookController'
    	});
}])

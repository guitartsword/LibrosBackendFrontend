angular.module('AngularScaffold.Services').factory('HomeService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
			GetBooks: function(){
				return $http.get(baseUrl + "v1/libros");
			},
			CreateBook: function(payload){
				return $http.post(baseURl + "v1/libros");
			},
			UpdateBook: function(payload){
				return $http.put(baseURl + "v1/libros/{librosId}");
			}
			DeleteBook: function(){
				return $http.delete(baseURl + "v1/libros/{librosId}");
			}
		};
	}
]);
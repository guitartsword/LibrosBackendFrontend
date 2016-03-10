angular.module('AngularScaffold.Controllers')
  .controller('UpdateController', ['$scope', 'BookService', '$sessionStorage', '$location', function ($scope, BookService, $sessionStorage, $location) {
		$scope.libros = [];
		$scope.libro = {};
		$scope.isAdmin = function(){
		return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
		}
		$scope.isRegular = function(){
		return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
		}
		$scope.changeView = function(view,currentLibro){
            $scope.libro = currentLibro;
            console.log($scope.libro.title);
            $location.path(view);
        }
        $scope.updateBook = function(view){
        	console.log($scope.libro._id);
        	BookService.UpdateBook().then(function(response){
        		alert("Se actualizaron los datos");
        	}).catch(function(err){
            	alert(err.data.error + " " + err.data.message);
            });
            $location.path(view);
            getBooks();
        }
  }]);
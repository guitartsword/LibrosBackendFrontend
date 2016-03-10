angular.module('AngularScaffold.Controllers')
  .controller('BookController', ['$scope', 'BookService', '$sessionStorage', '$location', function ($scope, BookService, $sessionStorage, $location) {
		$scope.libros = [];
		$scope.libro = {};

		$scope.isAdmin = function(){
		return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
		}
		$scope.isRegular = function(){
		return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
		}
		$scope.changeView2 = function(view,currentLibro){
            BookService.SetCurrentBook(currentLibro);
            $location.path(view);
            console.log("currentLibro._id");
        }
        $scope.changeView = function(view){
            $location.path(view);
        }
        $scope.addBook = function(view){
            BookService.CreateBook($scope.libro).then(function(response){
            	alert("Libro creado");
            	$location.path(view);
            	$scope.getBooks();
            }).catch(function(err){
            	alert(err.data.error + " " + err.data.message);
            });
            
        }
        $scope.getBooks = function(){
        	BookService.GetBooks().then(function(response){
        		$scope.libros = response.data;
        	}).catch(function(err){
            	alert(err.data.error + " " + err.data.message);
            });
        }
        $scope.updateBook = function(view){
        	BookService.UpdateBook($scope.libro).then(function(response){
        		alert("Se actualizaron los datos");
        		$location.path(view);
        		$scope.getBooks();
        	}).catch(function(err){
            	alert(err.data.error + " " + err.data.message);
            });
            
        }
        $scope.delBook = function(currentLibro){
        	BookService.SetCurrentBook(currentLibro);
        	BookService.DeleteBook().then(function(response){
        		alert("Se borro el libro");
        		$scope.getBooks();
        	}).catch(function(err){
            	alert(err.data.error + " " + err.data.message);
            });   
        }
  }]);
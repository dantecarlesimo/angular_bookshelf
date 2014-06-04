var BookCtrl = function($scope) {

    $scope.books = [];
   
    $scope.addBook = function() {
    $scope.books.push({title: $scope.title, 
      author: $scope.author, 
      isbn: $scope.isbn, 
      description: $scope.description});  
    $scope.title = "";
    };

    $scope.deleteBook = function(book) {
      var index = $scope.books.indexOf(book)
      $scope.books.splice(index,1);
    }

};
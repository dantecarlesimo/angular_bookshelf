var BookCtrl = function($scope) {

    $scope.books = [];
   
    $scope.addBook = function() {
    $scope.books.push({title: $scope.book.title, 
      author: $scope.book.author, 
      isbn: $scope.book.isbn, 
      description: $scope.book.description});  
    $scope.book = "";
    };

    $scope.deleteBook = function(book) {
      var index = $scope.books.indexOf(book)
      $scope.books.splice(index,1);
    }

};
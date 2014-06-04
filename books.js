var BookCtrl = function($scope) {

    $scope.books = [];
   
    $scope.addBook = function() {
    $scope.books.push($scope.book);  
    $scope.book = "";
    };

    $scope.deleteBook = function(book) {
      var index = $scope.books.indexOf(book)
      $scope.books.splice(index,1);
    }

};

// {title: $scope.book.title, 
//       author: $scope.book.author, 
//       isbn: $scope.book.isbn, 
//       description: $scope.book.description}
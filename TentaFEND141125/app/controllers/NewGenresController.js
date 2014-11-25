function NewGenresController($scope, $http) {
    $scope.SaveNewGenre = function() {
        $http.post("/odata/Genres", $scope.NewGenre)
            .success(function() {
            console.log($scope.NewGenre.GenreId + "was saved");
            });
    };
}
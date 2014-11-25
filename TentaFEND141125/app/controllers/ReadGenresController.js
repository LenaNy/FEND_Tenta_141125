function ReadGenresController($scope, $http) {
    $http.get("odata/genres")
        .success(function(data, status) {
            $scope.Genres = data.value;
        });
}
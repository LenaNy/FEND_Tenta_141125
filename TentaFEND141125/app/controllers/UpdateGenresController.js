function UpdateGenresController($scope, $http) {
    $scope.UpdateGenre = function (key) {
        var url = "/odata/Genres('" + key + "')";
        $http.put(url)
            .success(function () {
            console.log(key + "was updated");
        });
    } 
}
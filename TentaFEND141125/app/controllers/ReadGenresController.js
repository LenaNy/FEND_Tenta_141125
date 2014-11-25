function ReadGenresController($scope, $http) {
    $http.get("/odata/Genres")
        .success(function(data, status) {
            $scope.Genres = data.value;
        });

$scope.deleteGenres = function(key) {
    var url = "/odata/Genres('" + key + "')";
    $http.delete(url)
        .success(function () {
            console.log(key + " was saved.");
        });
            console.log("Remove Genre");
        }
    }


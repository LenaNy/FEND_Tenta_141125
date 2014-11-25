function UpdateGenresController($scope, $http) {
    $scope.UpdateGenre = function (key) {
        var url = "/odata/Genres('" + key + "')";
        var genre = g in Genre;
        var id = document.getElementById("id");
        id.innerText = g.GenreId;
        var name = document.getElementById("Name");
        name.innerText = g.Name;
        $http.put(url)
            .success(function () {
            console.log(key + "was updated");
        });
    } 
}
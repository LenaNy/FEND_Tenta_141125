var app = angular.module('TentaFEND', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/app/partials/NewGenre.html",
            controller: "NewGenresController"
        })
        .when('/Read', {
            templateUrl: "/app/partials/ReadGenres.html",
            controller: "ReadGenresController"
        });
});

app.controller('ReadGenresController', ReadGenresController)
    .controller('NewGenresController', NewGenresController);


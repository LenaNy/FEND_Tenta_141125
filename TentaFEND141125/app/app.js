var app = angular.module('TentaFEND', [ngRoute]);

app.config(function($routeProvider) {
    $routeProvider.when('/',
        {
            templateUrl: "/app/partials/NewGenres.html",
            controller: "NewGenresController"
        })
        .when('/Read', {
            templateUrl: "/app/partials/ReadGenres.html",
            controller: "ReadGenresController"
        });
});

//var app = angular.module('MyApp', ['ngRoute']);

//app.config(function ($routeProvider) {
//    $routeProvider.when('/',
//        {
//            templateUrl: "/app/partials/NewAuthor.html",
//            controller: "NewAuthorsController"
//        })
//    .when('/List',
//        {
//            templateUrl: "/app/partials/ListAuthors.html",
//            controller: "ListAuthorsController"
//        })
//    .when('/Edit',
//        {
//            templateUrl: "/app/partials/EditAuthors.html",
//            controller: "EditAuthorsController"
//        });
//});

//app.controller('NewAuthorsController', NewAuthorsController)
//    .controller('ListAuthorsController', ListAuthorsController)
//    .controller('EditAuthorsController', EditAuthorsController);
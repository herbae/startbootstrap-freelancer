(function() {
'use strict';

var app = angular.module('app', ['ngRoute']);

/* ngInject */
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'pages/main.html',
            controller: 'MainController'
        })
        .when('/photography', {
            templateUrl: 'pages/photography.html'
        })
        .otherwise({
            redirectTo: '/main'
        });
}]);

app.controller('MainController', ['$scope', '$location', function($scope, $location) {
    $scope.go = function(path) {
        $location.url(path);
    };
}]);

})();
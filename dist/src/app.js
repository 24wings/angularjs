angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
    $routeProvider.when('/index', {
        templateUrl: 'pages/index.html',
        controller: 'indexCtrl'
    })
        .otherwise('/index');
});
//# sourceMappingURL=app.js.map
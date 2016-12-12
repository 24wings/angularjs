angular.module('myApp', ['ngRoute'])
    //配置app的路由
    .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider.when('/index', {
            templateUrl: 'pages/index.html',
            controller: 'indexCtrl'
        })
            // 默认路由
            .otherwise('/index');
    })
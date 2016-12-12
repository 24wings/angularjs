angular.module('myApp')
    .service('productService', function ($http: ng.IHttpService, appConfig) {
        // 获取所有产品组
        this.getAllGroups =
            () => {
                return $http({
                    method: 'GET',
                    url: appConfig.serverIp + 'getAllGroups',
                    params: { username: '' }
                });
            }
    })
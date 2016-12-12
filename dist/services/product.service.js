angular.module('myApp')
    .service('productService', function ($http, appConfig) {
    // 获取所有产品组
    this.getAllGroups =
        function () {
            return $http({
                method: 'GET',
                url: appConfig.serverIp + 'getAllGroups',
                params: { username: '' }
            });
        };
});
//# sourceMappingURL=product.service.js.map
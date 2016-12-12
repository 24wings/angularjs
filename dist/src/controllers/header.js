angular.module('myApp')
    .controller('headerCtrl', function ($scope, productService) {
    $scope.productList = [];
    productService.getAllGroups().then(function (rtn) {
        console.log(rtn);
    });
});
//# sourceMappingURL=header.js.map
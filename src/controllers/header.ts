angular.module('myApp')
    .controller('headerCtrl', ($scope: ng.IScope | any, productService) => {
        $scope.productList = [];
        productService.getAllGroups().then(rtn => {
            console.log(rtn);
        });

    });
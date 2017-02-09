'use strict';

var products = angular.module('products');

products.component('productsList', {
    templateUrl: './scripts/controllers/products/products.template.html',

    controller: ['items', 'cart', 'localCart', '$routeParams', '$scope', '$rootScope', 'search', function(items, cart, localCart, $routeParams, $scope, $rootScope, search){

        $scope.addCart = function(item){
            cart.add({id: item.id});
            localCart.set(item.id, item);
            $rootScope.$emit('addToCart', item);
        };

        $scope.searchFilter = search.value;
        $scope.filter = $routeParams.filter;
        $scope.items = items.getItems();
        }]
});
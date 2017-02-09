'use strict';

var products = angular.module('product-info');

products.component('productInfo', {
    templateUrl: './scripts/controllers/product-info/product-info.template.html',

    controller: ['items', 'comments', 'cart', 'localCart', '$routeParams', '$scope', '$rootScope', function(items, comments, cart, localCart, $routeParams, $scope, $rootScope){

        $scope.addCart = function(item){
            cart.add({id: item.id});
            localCart.set(item.id, item);
            $rootScope.$emit('addToCart', item);
        };
        
        $scope.item = items.getItem({id: $routeParams.id});

        }]
});
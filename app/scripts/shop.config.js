'use strict';

angular.module('shopApp').config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/products/', {
        template: '<products-list></products-list>'
    }).
    when('/product/:id', {
        template: '<product-info></product-info>'
    }).
    when('/products/:filter', {
        template: '<products-list></products-list>'
    }).
    when('/index', {
        template: '<index-info></index-info>' +
        '<products-list></products-list>'
    }).
    otherwise('/index');

}]);
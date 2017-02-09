'use strict';
var shopApp = angular.module('shopApp');


shopApp.factory('items', ['$resource', function($resource){
    return $resource('http://makeitdouble.zzz.com.ua/shop/item.php?:option', {}, {
        getItems: {
            method: 'GET',
            params:{option: "get"},
            isArray: true
        },
        getItem: {
            method: 'GET',
            params:{option: "get"},
            isArray: false
        }
    });
}]);

shopApp.factory('comments', ['$resource', function($resource){
    return $resource('http://makeitdouble.zzz.com.ua/shop/comments.php?:option', {}, {
        getComments: {
            method: 'GET',
            params:{option: "get"},
            isArray: true
        },
        addComment:{
            method: 'POST',
            params:{option: "post"},
            isArray: true
        }
    });
}]);


shopApp.factory('cart', ['$resource', function($resource){
    return $resource('http://makeitdouble.zzz.com.ua/shop/cart.php?:option', {}, {
        add:{
            method: 'GET',
            params: {option: "add"},
            isArray: false
        },
        get:{
            method: 'GET',
            params: {option: "get"},
            isArray: true
        },
        deleteItem:{
            method: 'GET',
            params: {option: "del"},
            isArray: false
        },
        clear:{
            method: 'GET',
            params: {option: "clear"},
            isArray: false
        }
    });
}]);


shopApp.factory('localCart', ['$window', function($window){

        return {
            set: function(key, item) {
                var str;
                var localItem;
                if (!$window.sessionStorage[key])
                {
                    localItem = item;
                    localItem.quantity = item.quantity || 1;
                    str = JSON.stringify(localItem);
                }else{
                    var obj = JSON.parse($window.sessionStorage[key]);
                    var q = +obj.quantity;
                    obj.quantity = q + 1;
                    str = JSON.stringify(obj);
                }
                $window.sessionStorage[key] = str;
                return item;
            },
            
            get: function(id) {
                return $window.sessionStorage[id];
            },

            length: function(){
                return $window.sessionStorage.length;
            },

            getAll: function(){
                var arr = [];
                for (var item in $window.sessionStorage)
                {
                    arr.push(JSON.parse($window.sessionStorage[item]));
                }
                return arr;
            },
            
            quantity: function(){
                var quantity = 0;
                for (var item in $window.sessionStorage)
                {
                    var i = JSON.parse($window.sessionStorage[item]);
                    quantity += +i.quantity;
                }
                return quantity;
            },

            totalPrice: function(){
                var value = 0;
                for (var item in $window.sessionStorage)
                {
                    var temp = JSON.parse($window.sessionStorage[item]);
                    value += (+temp.price * +temp.quantity);
                }
                return value;
            },

            clear : function() {
                $window.sessionStorage.clear();
                $window.localStorage.clear();
                console.log('____________all clear___________');
            },

            deleteItem : function(id){
                for (var item in $window.sessionStorage)
                {
                   var temp = JSON.parse($window.sessionStorage[item]);
                   if( temp.id == id ){
                       $window.sessionStorage.removeItem(item);
                   }
                }
                return temp;
            }
        }
}]);

shopApp.service('search', function(){
    var _value = {};
    return {
        value: _value
    };
});
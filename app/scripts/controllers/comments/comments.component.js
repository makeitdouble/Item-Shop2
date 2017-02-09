'use strict';

var comments = angular.module('comments');

comments.component('commentsList', {
    templateUrl: './scripts/controllers/comments/comments.template.html',

    controller: ['comments','$routeParams', '$scope', function(comments, $routeParams, $scope){

        $scope.message = "No comments yet.";
        comments.getComments({id: $routeParams.id}).$promise.then(function(data){

            if (angular.copy(data).length > 0){
                $scope.comments = angular.copy(data);
                $scope.message = "";
            }
            
        });
    }]
});

comments.directive('tree', function recurveDirective(){
    return {
        templateUrl: './scripts/controllers/comments/comments.template.html',
        scope: {
            comments: '='
        }
    }
});
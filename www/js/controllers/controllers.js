angular.module('starter.controllers', ['starter.services']).controller('viewGalleries', function($scope, items) {
  $scope.items = items.results.Gallery;
});
angular.module('starter.controllers', ['starter.services']).controller('viewGalleries', function($scope, items,$state) {
  $scope.items = items.results.Gallery;
  $scope.galleries = [];
  $scope.onSwipeDown = function(index){
    loadGallery($scope.items[index].link.href);
  };
  var loadGallery = function(link) {
    var galleryParams = link.replace('http://ziza.es/','').split('/');
    $state.go('gallery' ,
        {
          year:galleryParams[0],
          month:galleryParams[1],
          day:galleryParams[2],
          name:galleryParams[3]
        }
    );
  }
}).controller('viewGalleryPhotos', function($scope, items,$state) {
  $scope.items = items.results.Images;
  $scope.goBackToGalleries = function(){
    $state.go('home');
  }
});
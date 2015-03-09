angular.module('starter.services', ['ngResource'])
.factory('Galleries', function ($resource, API_GALLERIES_URL) {
    return $resource(API_GALLERIES_URL+'&kimlimit=:limit&kimoffset=:offset');
});
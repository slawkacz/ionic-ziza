angular.module('starter.services', ['ngCachedResource'])
.factory('Galleries', function ($cachedResource, API_GALLERIES_URL) {
    return $cachedResource('gallery',API_GALLERIES_URL+'&kimlimit=:limit&kimoffset=:offset');

}).factory('Images', function ($cachedResource, API_IMAGES_URL) {

    return $cachedResource('images',API_IMAGES_URL+'&kimpath1=:year&kimpath2=:month&kimpath3=:day&kimpath4=:name');
}).factory('httpInterceptor', function ($q, $rootScope, $log) {

        var numLoadings = 0;

        return {
            request: function (config) {

                numLoadings++;

                // Show loader
                $rootScope.$broadcast('loading:show');
                return config || $q.when(config)

            },
            response: function (response) {

                if ((--numLoadings) === 0) {
                    // Hide loader
                    $rootScope.$broadcast('loading:hide');
                }

                return response || $q.when(response);

            },
            responseError: function (response) {

                if (!(--numLoadings)) {
                    // Hide loader
                    $rootScope.$broadcast('loading:hide');
                }

                return $q.reject(response);
            }
        };
    });
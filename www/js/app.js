// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])
    .constant('API_GALLERIES_URL', 'https://www.kimonolabs.com/api/3iirgfbw?apikey=joyvk1EdYr45g8O9BIB6z5qCFItdB0BE')
    .constant('API_IMAGES_URL', 'https://www.kimonolabs.com/api/3fzl1qju?apikey=joyvk1EdYr45g8O9BIB6z5qCFItdB0BE').run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }).config(function ($httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');
    }).run(function ($rootScope, $ionicLoading) {
        $rootScope.$on('loading:show', function () {
            $ionicLoading.show({template: 'Loading...'})
        })

        $rootScope.$on('loading:hide', function () {
            $ionicLoading.hide()
        })
    }).config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('home', {
            url: '/',
            controller: 'viewGalleries',
            templateUrl: 'templates/home.html',
            resolve: {
                items: function (Galleries) {
                    return Galleries.get({
                        limit: 20,
                        offset: 0
                    }).$promise;
                }
            }
        }).state('gallery', {
            url: '/gallery/:year/:month/:day/:name',
            controller: 'viewGalleryPhotos',
            templateUrl: 'templates/gallery.html',
            resolve: {
                items: function (Images, $stateParams, $ionicLoading) {
                    return Images.get($stateParams).$promise;
                }
            }

        });
    });
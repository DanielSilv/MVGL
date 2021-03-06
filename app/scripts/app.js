'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('MVGL',[
  'ionic',
  'config',
  'MVGL.controllers',
  'MVGL.services'
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: '/search',
      views: {
        'menuContent' :{
          templateUrl: 'templates/search.html'
        }
      }
    })

    .state('app.genres', {
      url: '/genres',
      views: {
        'menuContent' :{
          templateUrl: 'templates/genres.html',
          controller: 'GenresCtrl'
        }
      }
    })

    .state('app.genre', {
      url: '/genres/:genreId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/genre.html',
          controller: 'GenreCtrl'
        }
      }
    })
  
  .state('app.playing', {
      url: '/playing',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gamelist.html',
          controller: 'GamelistCtrl'
        }
      }
    })
  
  .state('app.completed', {
      url: '/completed',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gamelist.html',
          controller: 'GamelistCtrl'
        }
      }
    })
  
  .state('app.dropped', {
      url: '/dropped',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gamelist.html',
          controller: 'GamelistCtrl'
        }
      }
    })
  
  .state('app.wishlist', {
      url: '/wishlist',
      views: {
        'menuContent' :{
          templateUrl: 'templates/gamelist.html',
          controller: 'GamelistCtrl'
        }
      }
    })

    .state('app.game', {
      url: '/game/:gameId',
      views: {
        'menuContent' :{
          templateUrl: 'templates/game.html',
          controller: 'GameCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/genres');
});


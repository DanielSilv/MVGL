'use strict';
angular.module('MVGL.services', [])

.service('GameService', function ($http) {
  var BASE = 'http://thegamesdb.net/api/';
  var genres = [
    { title: 'Shooter', id: 1 },
    { title: 'Action', id: 2 },
    { title: 'Flight Simulator', id: 3 },
    { title: 'Adventure', id: 4 },
    { title: 'Sandbox', id: 5 },
    { title: 'Racing', id: 6 },
    { title: 'Role-Playing', id: 7 },
    { title: 'Horror', id: 8 },
    { title: 'Fighting', id: 9 },
    { title: 'MMO', id: 10 },
    { title: 'Platform', id: 11 },
    { title: 'Puzzle', id: 12 },
    { title: 'Strategy', id: 13 },
    { title: 'Stealth', id: 14 },
    { title: 'Sports', id: 15 },
    { title: 'Construction and Management Simulation', id: 16 },
    { title: 'Vehicle Simulation', id: 17 },
    { title: 'Music', id: 18 },
    { title: 'Life Simulation', id: 19 }
  ];
  var games = [
    { genres: [1,2], id: 1, gameName: 'Halo 4', dev: '343 Studios', image: 'http://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png' },
    { genres: [9], id: 2, gameName: 'Super Smash Bros.', dev: 'Nintendo', image: 'http://img2.wikia.nocookie.net/__cb20130611234145/nintendo/en/images/a/a0/SSB4_Logo.jpg' },
    { genres: [1, 2, 7], id: 3, gameName: 'Borderlands', dev: 'Gearbox', image: 'http://upload.wikimedia.org/wikipedia/en/0/01/Borderlandscover.jpg' }
  ];

  this.getGenres = function () {
    return genres;
  };

  this.getGenreTitle = function (genreId) {
    return _.find(genres, { id: parseInt(genreId) }).title;
  };
  
  this.getGameTitle = function (gameId) {
    return _.find(games, { id: parseInt(gameId) }).gameName;
  };
  
  this.getGameImage = function (gameId) {
    return _.find(games, { id: parseInt(gameId) }).image;
  };
    
  this.getGamesByGenre = function(genreId) {
    var title = this.getGenreTitle(genreId);
    var url = BASE + 'GetGamesList.php?genre=' + encodeURIComponent(title);
    $http.get(url)
      .success(function(data) {
        console.log(data);
      })
      .error(function(error) {
        console.log(error);
      });
    return _.filter(games, function(game) {
      return _.contains(game.genres, parseInt(genreId));
    });
  };
});

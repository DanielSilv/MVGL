'use strict';
angular.module('MVGL.services', [])

.service('GameService', function () {
  var genres = [
    { title: 'RTS', id: 1 },
    { title: 'RPG', id: 2 },
    { title: 'MMORPG', id: 3 },
    { title: 'Shooter', id: 4 },
    { title: 'Platformer', id: 5 },
    { title: 'Simulator', id: 6 }
  ];
  var games = [
    { genres: [4], id: 1, gameName: 'Halo 4', dev: '343 Studios', image: 'http://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png' }
  ];

  this.getGenres = function () {
    return genres;
  };

  this.getGenreTitle = function (genreId) {
    return _.find(genres, { id: parseInt(genreId) }).title;
  };
    
  this.getGamesByGenre = function(genreId) {
    return _.filter(games, function(game) {
      return _.contains(game.genres, parseInt(genreId));
    });
  };
});



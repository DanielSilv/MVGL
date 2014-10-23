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

  this.getGenres = function () {
    return genres;
  };

  this.getGenreTitle = function (genreId) {
    return _.find(genres, { id: parseInt(genreId) }).title;
  };
});



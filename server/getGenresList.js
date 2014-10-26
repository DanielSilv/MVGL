var request = require('request');
var _ = require('lodash');
var parseXML = require('xml2js').parseString;
var Bro = require('brototype').Bro;

var URL = 'http://thegamesdb.net/api/GetGame.php?id=';
var SAMPLE_SIZE = 1000;
var genres = [];

var fetchGame = function (n) {
  request(URL + n, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseXML(body, function (err, result) {
        if (!result.Error && Bro(result).doYouEven('Data.Game.0.Genres')){
          result.Data.Game[0].Genres.forEach(function (g) {
            g.genre.forEach(function (genre) {
              if (!_.contains(genres, genre)) {
                genres.push(genre);
                console.log(genre);
              }
            });
          });
        }
      });
    }
  });
};

_.times(SAMPLE_SIZE, function (n) {
  fetchGame(n);
});

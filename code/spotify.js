//modular file for the Spotify API
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify(keys.spotify);
 
var songSearch = function(input) {

spotify.search({ type: 'track', query: input }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  var tracks = data.tracks.items;
  tracks.forEach(function(ele){
    console.log("Song Title: " + ele.name);
    console.log("Artist: " + ele.album.artists[0].name);
    console.log("Album: " + ele.album.name);
    console.log("Spotify Link: " + ele.external_urls.spotify);
    console.log("-------------------");
  })

});}

module.exports = {
    songSearch: songSearch
};
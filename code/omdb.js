//modular file for the OMDB API
var request = require("request");

var movieSearch = function(input, callback){ 
    if (input === undefined || input === "") {
        input = "Mr. Nobody";
    }
    var title = encodeURI(input);
    request(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=trilogy`, function(error, response, body) {

  if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);
    console.log(`Movie Title: ${data.Title}`);
    console.log(`Release Year: ${data.Year}`);
    console.log(`IMDB Rating: ${data.imdbRating}`);
    console.log(`Rotten Tomatoes Rating: ${data.Ratings[1].Value}`);
    console.log(`Produced in: ${data.Country}`);
    console.log(`Spoken Language(s): ${data.Language}`);
    console.log(`Plot Summary: ${data.Plot}`);
    console.log(`Cast: ${data.Actors}`);
    callback();
  }
});}

module.exports = {
    movieSearch: movieSearch
};
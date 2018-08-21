//main js file, will be the file to run on node & will interact with the API JS files
var omdb = require("./omdb.js");
var bands = require("./bandsintown");
var spotify = require("./spotify.js");
var input = process.argv[2];

// omdb.movieSearch(input);
// bands.bandSearch(input);
spotify.songSearch(input);
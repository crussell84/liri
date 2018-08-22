//main js file, will be the file to run on node & will interact with the API JS files
var omdb = require("./omdb.js");
var bands = require("./bandsintown");
var spotify = require("./spotify.js");
var inquirer = require("inquirer");
var serviceOptions = ["Get information about a song", "Get information about a movie", "Get information about when/where a band is playing"];

var runLiri = function () {
    inquirer.prompt([{
        name: "serviceChoices",
        type: "list",
        message: "What would you like to do today? Choose from the following options.",
        choices: serviceOptions
    }]).then(function (answers) {
        var choice = "";
        switch (answers.serviceChoices) {
            case "Get information about a song":
                choice = "song";
                break;
            case "Get information about a movie":
                choice = "movie";
                break;
            case "Get information about when/where a band is playing":
                choice = "band";
                break;
        }
        inquirer.prompt([{
            name: "specificSearch",
            type: "input",
            message: `What ${choice} would you like information about?`
        }]).then(function (answer) {
            var input = answer.specificSearch;
            var anotherSearch = function () {
                inquirer.prompt([
                    { name: "runAnother", type: "confirm", message: "Would you like to do something else?" }])
                    .then(function (answers) {
                      if (answers.runAnother) {
                        runLiri();
                      } else {
                        console.log("Goodbye!");
                      }
                    })
            }
            switch (choice) {
                case "song":
                    spotify.songSearch(input, anotherSearch);
                    break;
                case "movie":
                    omdb.movieSearch(input, anotherSearch);
                    break;
                case "band":
                    bands.bandSearch(input, anotherSearch);
                    break;

            }
        })
    })
}

runLiri();
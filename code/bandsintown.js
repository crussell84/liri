//modular file for the BandsInTown API
var request = require("request");
var moment = require("moment");

var bandSearch = function (input, callback) {

    var artist = encodeURI(input);
    request(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            data.forEach(function (elem) {
                console.log(elem.venue.name);
                console.log(elem.venue.city + ", " + elem.venue.region + ", " + elem.venue.country);

                console.log(moment(elem.datetime).format("MM/DD/YYYY"));
                console.log('~~~~~~');
            }
            );
            callback();
        }
    });
}

module.exports = {
    bandSearch: bandSearch
};
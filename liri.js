require("dotenv").config();

var keys = require("./keys.js");

const Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

var axios = require("axios");
var request = require("request");

// in case trilogy doesn't work
//var movieKey = " 26fd329a";

var fs = require("fs");
var moment = require("moment");

//switch statement
switch(process.argv[2]) {
  case "spotify-this-song": 
  spotifyFunction();
  break;

  case "concert-this":
  concertFunction();
  break;

  case "movie-this":
  movieFunction();
  break;

  case "do-what-it-says":
  justDoItFunction();
  break;
}

//concert function
function concertFunction(){
  axios
  .get("https://rest.bandsintown.com/artists/" + process.argv.slice(3).join("+") + "/events?app_id=codingbootcamp")
  .then(
    function(response){
    // console.log(response.data[0]);
    console.log(`
    Artist: ${process.argv.slice(3).join(" ").toUpperCase()}
    Tour: ${response.data[0].venue.name}
    Location: ${response.data[0].venue.city}
    Date: ${moment(response.data[0].datetime).format("dddd, MMMM Do YYYY, h:mm a")}
    `);
  })
  .catch(function(err){
    console.log(err) 
    console.log("\nResults Not Found. This artist is either dead or has not scheduled concerts in the near future.");
  });
};

//spotifyFunction
function spotifyFunction() {
spotify.search({type: 'track', query: process.argv.slice(3).join("+"), limit: 1}, function(err, response) {
  if (err) {
    return console.log("Erorr:" + err);
  }
console.log(response.tracks.items[0]);
console.log(`

Song: ${response.tracks.items[0].name}


`)
});
};

//movie function
function movieFunction() {
  axios
  .get("https://www.omdbapi.com/?apikey=trilogy&t=" + process.argv.slice(3).join("+"))
  .then(function(response) {
    // console.log(response);
    console.log(`
    Title: ${response.data.Title}
    Release Year: ${response.data.Year}
    IMDB Rating: ${response.data.imdbRating}
    Metascore: ${response.data.Metascore}
    Country: ${response.data.Country}
    Language: ${response.data.Language}
    Plot: ${response.data.Plot}
    Actors: ${response.data.Actors}
    `);
  }).catch(function(err){
    console.log(err);
  })
  };

  function justDoItFunction(){
    fs.readFile("./random.txt", "utf8", function(err, data) {
      if (err) {
        return console.log(err);
      }
      console.log(data);
    })
  }
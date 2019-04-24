# Liri-Node-App

## Functionality

The Liri app will allow users to seek more information from either a song name, artist he/she wishes to see in concert, or a movie.  

After typing "node liri.js", the user will input one of four commands:

### 1) spotify-this-song

The user will input a song following this command and retrieve the artits name, album name, and a preview URL of the song.

![spotify-image](https://raw.githubusercontent.com/mrubenstein6192/liri-node-app/master/screenshots/spotify-this-song.png")

### 2) concert-this

The user will input an artist following this command and Liri will tell him/her when the next concert, the venue or tour it is a part of, and the city it is located.

### 3) movie-this

The user will input a movie title following this command and retrive the following information:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Metascore Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.

### 4) do-what-it-says

If the user inputs this command, he/she will be prompted with a suggested action.

(When I tried to have this command automatically perform my spotify function, it broke.)

## Technologies Used

- Spotify API
- Axios
- OMDB API
- Bands in Town API
- Moment
- DotEnv
- Node and JS

### Author

Mike Rubenstein
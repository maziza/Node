//Variables
var keys = require('./keys.js');

var inquire = require('inquirer');
var fs = require('fs');

var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');

var command = process.argv[2];							
var input = process.argv[3];

//switch between functions

switch(command) {
	case 'my-tweets':
		twitter();
	break;

	case 'spotify-this-song':
		spotify();
	break;

	case 'movie-this':
		movie();
		break;

	case 'do-what-it-says':
		doit();
	break;

	default: 
		console.log("type a command");
	break;
}



// twitter function

function twitter(){

	var twitter = require('./keys.js').twitter;
	// console.log(twitter)

	var client = new Twitter(keys.twitter);

	var params = {screen_name: '', count: 10};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
      			console.log(error);
    	}

        for(var i = 0; i < 10; i++)

	  }
	})  

};

//spotify
function spotify(){

	spotify.search({ type: 'track', query: results }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    else{
    	for(var i = 0; i < 5; i++){
    		var musicfound = data.tracks.items[i];
    		console.log(musicfound);
    		//Artist
    		console.log("The Artist is: " + musicfound.artists[0].name);
    		//song name
    		console.log("The Song is: " + musicfound.name);
    		//url of song
    		console.log("The source is: " + musicfound.external_urls.spotify);
    		//album name
    		console.log("The album is " + musicfound.album.name);
    		};
    	};
	}
};


// OMDB api search
function movie() {
	var movieSearch = 'http://www.omdbapi.com/?t=' + input + '&y=&plot=short&tomatoes=true&r=json';
	if {
	 request(movieSearch, function (error, response, body) {	
      		if (!error && response.statusCode == 200) {
              	//Title of the movie
              	console.log("The movie: " + JSON.parse(body)["Title"]);
              	//Year created
              	console.log("Year created: " + JSON.parse(body)["Year"]);
            	//IMDB rating
              	console.log("IMDB Rating: " + JSON.parse(body)["imdbRating"]);
              	//Country origin
              	console.log("Country of Origin: " + JSON.parse(body)["Country"]);
              	//Language origin
              	console.log("Language of the movie: " + JSON.parse(body)["Language"]);
              	//Plot
              	console.log("The Plot: " + JSON.parse(body)["Plot"]);
              	//Actors in this movie
              	console.log("Actors: " + JSON.parse(body)["Actors"]);
              	//Rotten Tomatoes rating
              	console.log("Rotten Tomatoes Rating: " + JSON.parse(body)["tomatoRating"]);
                //Source of Rotten Tomatoes
              	console.log("Rotten Tomatoes source: " + JSON.parse(body)["tomatoURL"]);
            	};
      		};
      	}
    };
};

function doit() {

	//fs read random.text
	fs.readFile("random.text", "utf8", function(error, data) {
		if(error){
			console.log(error);
		console.log("do what it says");
}

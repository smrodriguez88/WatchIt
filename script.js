var searchTerm = encodeURI("Robocop")

var settings = {
	"async": false,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+searchTerm+"&country=us",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": ""
	}
}

$.ajax(settings).done(function (response) {
    console.log(response);
    term = response.term
    // Create a list for the search result titles
    showResults = []
    // For each of the search results create a new Object with title, picture, imdbId, and streams keys
    // Streams key contains a list of video streaming links
    for(var i = 0; i < response.results.length; i++){
        result = { 
            "title": response.results[i].name,
            "picture": response.results[i].picture,
            "imdbId": response.results[i].external_ids.imdb.id,
            "streams": [],
        }
        // Push each result to the showResults list
        showResults.push(result)
        // console.log(showResults)
        // For each of the streaming options store in showResults array
        for(var v = 0; v < response.results[i].locations.length; v++){
            // Set apply the URL link of the streaming source to the streams list as the iterator value of v
            showResults[i].streams[v] = response.results[i].locations[v].url
        }
    console.log(showResults)
    localStorage.setItem(term, JSON.stringify(showResults))
}});

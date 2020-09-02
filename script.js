 function utellyMovie(searchMovie){
var settings = {
	"async": false,
	"crossDomain": true,
	"url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+searchMovie+"&country=us",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "5cd25c1681mshc17a6de27e4095fp17a9c9jsna97853c66886"
	}
}

$.ajax(settings).done(function (response) {
    // console.log(response);
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
            "actors" : "",
        }
        // Push each result to the showResults list
        showResults.push(result)
        // console.log(showResults)
        // For each of the streaming options store in showResults array
        for(var v = 0; v < response.results[i].locations.length; v++){
            // Set apply the URL link of the streaming source to the streams list as the iterator value of v
            showResults[i].streams[v] = response.results[i].locations[v].url
        }}
        for (var a = 0; a < showResults.length; a++){
            console.log(showResults)
            imdbid = showResults[a].imdbId
            var Key="3d6175eb"
            var MURL="http://www.omdbapi.com/?i="+imdbid+"&apikey="+Key
            var settings = {
                "async": false,
                "url": MURL,
                "method": "GET"}
            $.ajax(settings).done(function(response){
                showResults[a].actors = response.Actors
                showResults[a].plot = response.Plot
                showResults[a].director = response.Director
                showResults[a].genre = response.Genre
                showResults[a].runtime = response.Runtime
                showResults[a].year = response.Year               
            })
        console.log(showResults)
        localStorage.setItem(term, JSON.stringify(showResults))
}})};



$("#submit").on("click", function(){
    event.preventDefault()
    var searchTerm = $("#searchBar").val().trim().toLowerCase()
    utellyMovie(searchTerm)

})
  
  

// Global Variables
var searchHistory = []
var translatedServices = []

// Method to search for movie by name using UTELLY API, included OMDB call in method as well due to some
// issues experienced while troubleshooting intermingling code between teammates
function utellyMovie(searchMovie){
    // Push searchMovie into searchHistory array for future reference
    searchHistory.push(searchMovie)
    // Empty oldSearches field on call
    $('#oldSearches').empty(); 
    // Refresh searchHistory based on all items in array
    for(var s = 0; s < searchHistory.length; s++){
        // set title attribute of button and set title name
        $("#oldSearches").append('<div class="dropdown-item has-text-centered is-size-6"><button class="button is-rounded oswald pborder histBtn has-text-white" title="'+searchHistory[s]+'">' + searchHistory[s] + '</button></div>')
    }
    // EventListenenr for the History Button
    $(".histBtn").on("click", function(){
        // Movie Title is the Title attribute of the button
        movieTitle = $(this).attr("title")
        //console.log(movieTitle)
        displayTitleResults(movieTitle)
    })
    // Settings for AJAX call, setting async to false to get around response delay
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term="+searchMovie+"&country=us",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
            "x-rapidapi-key": "KEY OMITTED"
        }
    }
$.ajax(settings).done(function (response) {
    //console.log(response);
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
        }}
        // Add additional IMDB data to search results to a specific array entry, search by IMDB ID
        for (var a = 0; a < showResults.length; a++){
            // console.log(showResults)
            imdbid = showResults[a].imdbId
            var Key="KEY OMITTED"
            var MURL="http://www.omdbapi.com/?i="+imdbid+"&apikey="+Key
            // Once again setting async to false to avoid promise delay
            var settings = {
                "async": false,
                "url": MURL,
                "method": "GET"}
            $.ajax(settings).done(function(response){
                // Add additional IMDB data to original array item
                showResults[a].picture = response.Poster
                showResults[a].actors = response.Actors
                showResults[a].plot = response.Plot
                showResults[a].director = response.Director
                showResults[a].genre = response.Genre
                showResults[a].runtime = response.Runtime
                showResults[a].year = response.Year             
            })
        // Store fully populated JSON objects in localStorage
        localStorage.setItem(term, JSON.stringify(showResults))
}})};

// Method to display results to webpage
function displayTitleResults(searchMovie){
    // Pull JSON object from localStorage for the particular search term as the localStorage Key
    results = JSON.parse(localStorage.getItem(searchMovie))
    // console.log(results)
    $("#resultsList").empty()
    // For each search result in the results array populate the web page with buttons and descriptions to populate a list of returned titled based
    // on your search query
    for (var i = 0; i < results.length; i++){
        titleBtn = $("<button>").addClass("button has-text-white paytone pborder mb-1 ml-3 movieSel").text(results[i].title + " " + "("+results[i].year+")")
        titleBtn.attr("title-search", searchMovie)
        titleBtn.attr("title-index", i)
        titleDesc = $("<p>").addClass("oswald pl-3").text(results[i].plot)
        listItem = $("<li>").addClass("mb-3")
        listItem.append(titleBtn)
        listItem.append(titleDesc)
        $("#resultsList").append(listItem)
        $("#showResultsDiv").removeClass("is-hidden")
        }
        // for each results button create onClick event listener to populate the specific data for the title selected in the results
        $(".movieSel").on("click", function(){
            $("#yourServices").empty()
            $("#otherServices").empty()
            titleSearch = $(this).attr("title-search")
            results = JSON.parse(localStorage.getItem(titleSearch))
            titleIndex = $(this).attr("title-index")
            $("#showInfoDiv").removeClass("is-hidden");
            $("#titleSelect").html("<center>" + results[titleIndex].title + " (" + results[titleIndex].year + ")</center>");
            $("#picture").attr("src", results[titleIndex].picture);
            $("#selectGenre").text(results[titleIndex].genre);
            $("#selectRuntime").text(results[titleIndex].runtime);
            $("#selectDirector").text(results[titleIndex].director);
            $("#selectDesc").text(results[titleIndex].plot);
            $("#selectActors").text(results[titleIndex].actors);
            // console.log(results[titleIndex])
            // for loop to populate streaming links results
            // analyzes streams URL to determine which service the URL is for
            for (var s = 0; s < results[titleIndex].streams.length; s++) {
                var service;
                var streamUrls = results[titleIndex].streams[s];
                //console.log(results[titleIndex].streams[s])
                if (streamUrls.includes("netflix")){
                    service = "Netflix";
                } else if (streamUrls.includes("itunes.apple")){
                    service = "iTunes";
                } else if (streamUrls.includes("watch.amazon")){
                    service = "Amazon Prime";
                } else if (streamUrls.includes("hulu")){
                    service = "Hulu";
                } else if (streamUrls.includes("youtube")){
                    service = "Youtube Premium";
                } else if (streamUrls.includes("disney")){
                    service = "Disney +";
                } else if (streamUrls.includes("hbo")){
                    service = "HBO";
                } else if (streamUrls.includes("cbs")){
                    service = "CBS";
                } else if (streamUrls.includes("fox")){
                    service = "Fox";
                } else if (streamUrls.includes("nbc")){
                    service = "NBC";
                } else if (streamUrls.includes("nick")){
                    service = "Nickelodeon";
                } else if (streamUrls.includes("play.google")){
                    service = "Google Play";
                } else if (streamUrls.includes("dcuniverse")){
                    service = "DC Universe";
                } else if (streamUrls.includes(".discovery")){
                    service = "Discovery Channel";
                } else if (streamUrls.includes("tv.apple")){
                    service = "AppleTV +";
                } else {
                    service = "dunno";
                }
                // if myServicesList contans service append to #yourServices
                // else append to #otherServices
                // console.log(service)
                // console.log(translatedServices)
                // If the service is not in the translatedServices array add it to the youServices section
                if ($.inArray(service, translatedServices) != -1){
                    $("#yourServices").append("<li>❂ " + service + "<a href=" + results[titleIndex].streams[s] + " target='_blank'> Watch It</a></li>");
                // BUGFIX for fandango as we do not want to populate movies in theaters
                } else if(service == "dunno"){
                //    console.log("Hit an unsupported service")
                // If populate streaming link in otherServices
                } else {
                    $("#otherServices").append("<li>❂ " + service + "<a href=" + results[titleIndex].streams[s] + " target='_blank'> Watch It</a></li>");
                }
                
            }
        })   
}
// OnClick for submit/search button which kicks off the API calls to UTELLY, OMDB, and Displays results
$("#submit").on("click", function(){
    event.preventDefault()
    var searchTerm = $("#searchBar").val().trim().toLowerCase()
    utellyMovie(searchTerm)
    displayTitleResults(searchTerm)
})

// Intergration of services selected on home page, read list of services and append a full string for the name of the service
// instead of the ID of the service on the main page then display those names on the footer, also append those names to the 
// translatedServices array for future analysis in streaming links display
services = localStorage.getItem("services").split(',')
// console.log(services)
for (var i = 0; i < services.length; i++){
    if (services[i] === "netflix"){
        serviceName = "Netflix"
        translatedServices.push(serviceName)
    } else if (services[i] === "atp"){
        serviceName = "AppleTV +"
        translatedServices.push(serviceName)
    } else if (services[i] === "apv"){
        serviceName = "Amazon Prime"
        translatedServices.push(serviceName)
    } else if (services[i] === "youtube"){
        serviceName = "YouTube Premium"
        translatedServices.push(serviceName)
    } else if (services[i] === "disneyplus"){
        serviceName = "Disney +"
        translatedServices.push(serviceName)
    } else if (services[i] === "hbo"){
        serviceName = "HBO"
        translatedServices.push(serviceName)
    } else if (services[i] === "fox"){
        serviceName = "Fox"
        translatedServices.push(serviceName)
    } else if (services[i] === "cbs"){
        serviceName = "CBS"
        translatedServices.push(serviceName)
    } else if (services[i] === "nbc"){
        serviceName = "NBC"
        translatedServices.push(serviceName)
    } else if (services[i] === "nick"){
        serviceName = "Nickelodeon"
        translatedServices.push(serviceName)
    } else if (services[i] === "discovery"){
        serviceName = "Discovery Channel"
        translatedServices.push(serviceName)
    } else if (services[i] === "dcuniverse"){
        serviceName = "DC Universe"
        translatedServices.push(serviceName)
    } else if (services[i] === "amazoninstant"){
        serviceName = "Amazon Instant"
        translatedServices.push(serviceName)
    } else if (services[i] === "googleplay"){
        serviceName = "Google Play"
        translatedServices.push(serviceName)
    } else if (services[i] === "itunes"){
        serviceName = "iTunes"  
        translatedServices.push(serviceName)
    } else if (services[i]===("hulu")){
        serviceName = "Hulu"
        translatedServices.push(serviceName)
    }
    // append to footer
    sub = $('<div class="gold navbar-item is-size-4 pt-2">'+serviceName+'</div>')
    $("#subscriptions").append(sub)
}

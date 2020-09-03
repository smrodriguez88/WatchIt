
function sAnime(searchAnime){
  
  
$.ajax({
    url:"https://kitsu.io/api/edge/anime?include=streamingLinks&filter[slug]="+searchAnime,
    method:"GET"
  }).then(function(response){
    
    //list to stopre results 
  showResults=[]
  //come back to this
   //this will grab the streaming links maybe I need another loop to grab URL arry for now grab one 
    for(var i=0;i<response.included.length;i++) {
    //console.log(response.included[i].attributes.url)
    var streams=(response.included[i].attributes.url)
    console.log(streams)
        //displaying ther service
   
//loop for the attributes another loop to grab ratting title synopsis and youtube vid
    }for(var i=0;i<response.data.length;i++){
      //console.log(response.data[i].attributes.ageRating)
      //create an object called result
      result={
      //var for the rating
      "Arating":response.data[i].attributes.ageRating,
      //var fot the title
      "Atitle":response.data[i].attributes.canonicalTitle,
      //var fot the description
      "Danime":response.data[i].attributes.synopsis,
      "YID":response.data[i].attributes.youtubeVideoId
      
  //result bracket
    }
    //push result object unto showresults array
  showResults.push(result)
  showResults.push(streams)
  //console.log(result)
  //console.log(streams)
  //show results push (streaming service)????
   //loop bracket 
  }
  localStorage.setItem('streamkey',JSON.stringify(streams))
  localStorage.setItem("key", JSON.stringify(showResults))
  //response bracket
  }
    )}
  

// create a functio nto siplay the results 
function displayTitleResults(searchAnime){
    results = JSON.parse(localStorage.getItem('key'))
    streams=JSON.parse(localStorage.getItem('streamkey'))
    console.log(streams)
    console.log(results)
    $("#resultsList").empty()
    for (var i = 0; i < results.length; i++){
        titleBtn = $("<button>").addClass("button has-text-white paytone pborder mb-1 ml-3 movieSel").text(results[i].Atitle )
        titleBtn.attr("anime-search", searchAnime)
        titleBtn.attr("anime-index", i)
        titleDesc = $("<p>").addClass("oswald pl-3").text(results[i].Danime)
        titleRate =$('<p>').addClass('oswald pl-3').text(results[i].Arating)
        titleURL=$("<p>").addClass('oswald pl-3').text(streams)
        listItem = $("<li>").addClass("mb-3")
        listItem.append(titleBtn)
        listItem.append(titleDesc)
        listItem.append(titleRate)
        listItem.append(titleURL)
      

        ///
        $("#resultsList").append(listItem)
        $("#showResultsDiv").removeClass("is-hidden")
        }
      
}

$("#submit").on('click',function(){
  event.preventDefault()
  var searchTerm=$("#searchBar").val()
sAnime(searchTerm)
displayTitleResults(searchTerm)
})

    // $(".movieSel").on("click", function(){
        //     $("#yourServices").empty()
        //     animeSearch = $(this).attr("anime-search")
        //     results = JSON.parse(localStorage.getItem(animeSearch))
        //     animeIndex = $(this).attr("anime-index")
        //     $("#showInfoDiv").removeClass("is-hidden");
        //     $("#titleSelect").html("<center>" + results[animeIndex].title );
        //     $("#picture").attr("src", results[animeIndex].picture);
        //     $("#selectGenre").text(results[animeIndex].genre);
        //     $('#selectActors').text(results[animeIndex].actors);
        //     $("#selectDesc").text(results[animeIndex].plot);
        //     $("#selectRuntime").text(results[animeIndex].runtime);
        //     console.log(results[animeIndex])
        //     $("#yourServices").append(streams);
        //          //create an element to hold Streaming serive
        
        //         // if myServicesList contans service append to #yourServices
        //         // else append to #otherServices
      
        // }) 
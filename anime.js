//function to display anime Info 
// function displayAnimeInfo(anime){
//   var queryURL="https://kitsu.io/api/edge/anime?filter%5Btext%5D="+anime;

//   //ajax call
//   $.ajax({
//     url: queryURL, 
//     method:"GET"
//   }).then(function(response){
//     console.log(response)
//     //Create a div to hold the anime
//     var animeDiv=$("<div class='anime'>");
//     //store the rating data
//     for(var i = 0; i < response.data.length; i++){
//       var rating = response.data[i].attributes.averageRating
//       console.log(rating)
//       var slug= response.data[i].attributes.slug
//       console.log(slug)
//       var canonicalTitle=response.data[i].attributes.canonicalTitle
//       console.log(canonicalTitle)
//       var description= response.data[i].attributes.synopsis
//       //var image=response.data[i].attributes.coverImage.original
//     }

//     //create an element to hold the rating
//     var pOne=$('<p>').text('Rating:'+rating)
//     //displaying ther rating
//     animeDiv.append(pOne);
//     //creat element to hold the slug
//     var pTwo=$('<p>').text('Slug'+slug)
//     //display slug
//     animeDiv.append(pTwo);
//     // element to hold Title
//     var pThree=$('<p>').text('CanonicalTitle'+canonicalTitle)
//     //display the title
//     animeDiv.append(pThree)
//     // element to hold the plot 
//     var pFour=$('<p>').text('Description'+description)
//     // display the plot
//     animeDiv.append(pFour)
//     //relement to hold the image
//     //var iOne=$('img').attr('src',image)
//     // append to display
//     //animeDiv.append(iOne)
//     //putting entire object into animeDiv Element
//     $('#anime-view').prepend(animeDiv);
//     console.log(rating)
//   });}


// //button click event
// $('#add-anime').on('click',function(event){
//   event.preventDefault();
//   var anime=$('#anime-input').val().trim();
//   displayAnimeInfo(anime)})

// //run the function
// displayAnimeInfo()







// omdb api key

//robo cop test callusing ID and not title 
//$.ajax({
  //url: "http://www.omdbapi.com/?i=tt1234721&apikey=3d6175eb",
 // method: "GET"
//}/).then(function(response){
 // console.log(response)
//})


// Creating an AJAX call modified to take in the parameter of ID instead of movie for extra information


// 
// function sMovie(searchMovie){
//   var Key="3d6175eb"
//   var MURL="http://www.omdbapi.com/?i="+searchMovie+"&apikey="+Key
// $.ajax({
//     url:MURL,
//     method:"GET"
//   }).then(function(response){ 
//     console.log(response)
//     console.log(response.Actors)
//     console.log(response.Plot)
//     console.log(response.Directors)
//     console.log(response.Title)
//     console.log(response.Genre)
//     console.log(response.Runtime)
//     console.log(response.Year)

    
//     //creating variable for teh attributes
//     var actors=(response.Actors)
//     var plot=(response.Plot)
//     var directors=(response.Directors)
   

//   })

// }
// sMovie('tt1234721')


// calls back anime with the object that contains the streaming link 
$.ajax({
  url:"https://kitsu.io/api/edge/anime?include=streamingLinks&filter[slug]=sword-art-online",
  method:"GET"
}).then(function(response){
  for(var i = 0; i < response.included.length; i++)
  console.log(response.included[i].attributes.url)
})


// create a function uses the slug to grab streaming link...
function sAnime(searchAnime){
  
  
$.ajax({
    url:"https://kitsu.io/api/edge/anime?include=streamingLinks&filter[slug]="+searchAnime,
    method:"GET"
  }).then(function(response){
    for(var i=0;i<response.included.length;i++) 
    
    console.log(response.included[i].attributes.url)})
  }
  
    
  sAnime('bleach')

  $.ajax({
    url:"https://kitsu.io/api/edge/anime?include=streamingLinks&filter[slug]=sword-art-online",
    method:"GET"
  }).then(function(response){
    
    console.log(response)
  })
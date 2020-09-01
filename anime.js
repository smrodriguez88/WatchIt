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




// //THIS GIVES ME BACK HULU BUT IS NOT ATTACHED TO THE ANIME :(
// $.ajax({
//   url: 'http://kitsu.io/api/edge/streamers?New%20item=543', 
//   method:"GET"
// }).then(function(response){

// console.log(response)})



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
function sMovie(searchMovie){
  var Key="3d6175eb"
  var MURL="http://www.omdbapi.com/?i="+searchMovie+"&apikey="+Key
$.ajax({
    url:MURL,
    method:"GET"
  }).then(function(response){ 
    console.log(response)
    
    
   

  })

}
sMovie('tt1234721')












///const base_url="https://kitsu.io/api/edge/anime?filter%5Btext%5D=Bleach"

//function pageLoaded(){
    //fetch(base_url)
    //.then(res=>res.json())
    //.then(data=>console.log(data))
    //.catch(err=>console.log("error"))
//}

//window.addEventListener('load',pageLoaded)


//make a function that finds the slug in the object and then inputs it in the find anime 
//by slug method 
//query {
    //findAnimeBySlug(slug: "fullmetal-alchemist"){
      //streamingLinks {
        //nodes {
          //streamer {
            //siteName
          //}
          //u/rl
        //}
      //}
    //}
  //}
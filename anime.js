//function to display anime Info 
function displayAnimeInfo(anime){
  var queryURL="https://kitsu.io/api/edge/anime?filter%5Btext%5D="+anime;

  //ajax call
  $.ajax({
    url: queryURL, 
    method:"GET"
  }).then(function(response){
    console.log(response)
    //Create a div to hold the anime
    var animeDiv=$("<div class='anime'>");
    //store the rating data
    for(var i = 0; i < response.data.length; i++){
      var rating = response.data[i].attributes.averageRating
      console.log(rating)
      //store slug
      var slug= response.data[i].attributes.slug
      console.log(slug)
      //store canonicalTitle
      varCanonicalTitle
      
    
    }

    //create an element to hold the rating
    var pOne=$('<p>').text('Rating:'+rating)
    //displaying ther rating
    animeDiv.append(pOne);
    //creating an element to hold the slug 
    var pTwo=$('<p>').text('Slug'+slug)
    //display the slug 
    animeDiv.append(pTwo)
    //putting entire
    $('#anime-view').prepend(animeDiv);
    console.log(rating)
  });}

//displayAnimeInfo()
//function displayAnimeInfobySlug(){
  //$.ajax({url: "https://kitsu.io/api/graphql",
              //contentType: "application/json",
             // type:'GET',
              //data: JSON.stringify({query: {findAnimeBySlug(slug: 'fullmetal-alchemist'){streamingLinks, { nodes { streamer { siteName } url } } } }}),
 // }).then(function(response){
   // console.log(response)
   // })
//button click function 

$('#add-anime').on('click',function(event){
  event.preventDefault();
  var anime=$('#anime-input').val().trim();
  displayAnimeInfo(anime)})
 

//displayAnimeInfo()
//function displayAnimeInfobySlug(){
  //$.ajax({url: "https://kitsu.io/api/graphql",
              //contentType: "application/json",
             // type:'GET',
              //data: JSON.stringify({query: {findAnimeBySlug(slug: 'fullmetal-alchemist'){streamingLinks, { nodes { streamer { siteName } url } } } }}),
 // }).then(function(response){
   // console.log(response)
   // })
//button click function 





























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
          //url
        //}
      //}
    //}
  //}
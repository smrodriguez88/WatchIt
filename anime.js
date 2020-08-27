
var queryURLt="https://kitsu.io/api/edge/anime?filter%5Btext%5D=Bleach";
 $.ajax({
  url: queryURLt,
  method: "GET"
}).then(function(response){
  console.log(response)
})

console.log('Hi')
////

var animes=["Cowboy Beebop","Bleach"];

//function to display anime Info 
function displayAnimeInfo(){
  var anime=$(this).attr('data-name');
  var queryURL="https://kitsu.io/api/edge/anime?filter%5Btext%5D="+anime;
}
//ajax call
$.ajax({
  url: queryURL, 
  method:"GET"
}).then(function(response){

  //Create a div to hold the anime
  var animeDiv=$("<div class='anime'>");
  //store the rating data
  var rating= response.data[i].averageRating
  //create an element to hold the rating
  var pOne=$('<p>').text('Rating:'+rating)
  //displaying ther rating
  animeDiv.append(pOne);
  //putting entire
  $('#anime-view').prepend(animeDiv);
  
});

function renderButtons(){
  $("#anime-view").empty();
for (var i=0;i<animes.length;i++){
//this add buttons and the atrributes copying from activity 10
var a= $('<button>');
a.addClass('anime');
a.attr('data-name',animes[i]);
a.text(animes[i]);
$('#anime-view').append(a);
}
}
//button click function 

$('#add-anime').on('click',function(event){
  event.preventDefault();
  var anime=$('#anime-input').val().trim();
  animes.push(anime);

  renderButtons();
});
$(document).on('click',".anime-btn",displayAnimeInfo)
renderButtons();































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
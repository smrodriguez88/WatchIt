const base_url="https://kitsu.io/api/edge/anime?filter%5Btext%5D=Bleach"

function pageLoaded(){
    fetch(base_url)
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log("error"))
}

window.addEventListener('load',pageLoaded)


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
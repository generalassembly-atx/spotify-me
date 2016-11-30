// API Docs at:
// https://developer.spotify.com/web-api/search-item/
$(function() {


$('#search').on('submit', function (e) {
  console.log("form submitted");

  e.preventDefault();
  $('#results').empty();





  // function searchByArtist(keyword) {

    var keyword = $("#search-keyword"). val();
    console.log(keyword);

    var request = $.ajax({
      url:"https://api.spotify.com/v1/search",
      data:{
        q: keyword,
        type:"artist",
      }

  });

      var trackRequest = $.ajax({
        url:"https://api.spotify.com/v1/search",
        data:{
          q: keyword,
          type:"track",
        }

    });


        request.done(function(response) {
          var searchArtist = response.artists;


          console.log("Results: ", searchArtist);

          var artistsArray = searchArtist.items;
           console.log(artistsArray);
           for (var i=0, x=artistsArray.length; i<x; i++){
      console.log("Artist: ", artistsArray[i]);
      var artist = artistsArray[i];

      var li='<li>'+
                '<h2>'+ artist.name +'</h2>'+
              '</li>'

          $('#results').append(li);
          }
         });


        request.fail(function(xhrObject, textStatus, errorThrown) {
        console.log('Error:', textStatus, errorThrown)
        });




          // function searchByTrack(keyword) {
          //   var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';

          trackRequest.done(function(trackResponse) {
            var searchTrack = trackResponse.tracks;


            console.log("Results: ", searchTrack);

            var tracksArray = searchTrack.items;
             console.log(tracksArray);
             for (var i=0, x=tracksArray.length; i<x; i++){
        console.log("Artist: ", tracksArray[i]);
        var track = tracksArray[i];

        var li='<li>'+
                  '<h2>'+ track.name +'</h2>'+
                '</li>'

            $('#results').append(li);
            }
           });


          trackRequest.fail(function(xhrObject, textStatus, errorThrown) {
          console.log('Error:', textStatus, errorThrown)
          });






    });




});

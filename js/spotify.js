// API Docs at:
// https://developer.spotify.com/web-api/search-item/

$(function(){

  $('.form').on('submit', function(e){

    e.preventDefault();

    //$('#search-text').empty();

    var searchOption = $("#search-type option:selected").text();

    if(searchOption === 'Search by artist') {
      searchByArtist();
    } else {
      searchByTrack();
    }

    function searchByArtist() {
      //var url = "https://api.spotify.com/v1/search?q='+keyword+'&type=artist";
      var keyword = $('#search-keyword').val();
      var artistRequest = $.ajax({
        url: "https://api.spotify.com/v1/search?q='+keyword+'&type=artist",
        data: {
          q: keyword,
          type: artist
          }
      });

      artistRequest.done(function(response){
      //console.log('Response data', data);

      var results = response.items;

      //console.log('Response data', searchResults);

      for(var i=0, x=results.length; i<x; i++){
        console.log('Artist:', results[i]);
        var artist = results[i];
        }
      });

      artistRequest.fail(function(xhrObject, textStatus, errorThrown){
        console.log('Error', textStatus, errorThrown);
      });
    };
  });
});

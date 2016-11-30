// API Docs at:
// https://developer.spotify.com/web-api/search-item/
console.log('spotify js working');

$(document).ready(function (){

  $('#search').on('submit', function(e){

    $('#results').empty();
  });

  var request = $.ajax({
        url: 'https://api.spotify.com/v1/search',
        method: 'GET'
      });

  var artistName = $('.artistSearch').val();
    console.log('Artist:', artistName);

  var songName = $('.trackSearch').val();
    console.log('Track:', songName);



  // allows user to search by artist
  function searchByArtist(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
  }

  // allows user to search by keyword
  function searchByTrack(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';
  }

}); // end of document ready

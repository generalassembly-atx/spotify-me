// API Docs at:
// https://developer.spotify.com/web-api/search-item/
console.log('spotify js working');

$(document).ready(function (){




  // allows user to search by artist
  function searchByArtist(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=artist';
    $('#search').on('submit', function(e){

      $('#results').empty();
    });
  }

  // allows user to search by keyword
  function searchByTrack(keyword) {
    var url = 'https://api.spotify.com/v1/search?q='+keyword+'&type=track';

        $('#search').on('submit', function(e){

          $('#results').empty();
        });
  }

}); // end of document ready
